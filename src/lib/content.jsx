import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { defaultContent } from '../data/content'

// Published content from the admin panel is merged over the built-in defaults.
// Objects merge key by key (so fields added to the code later still get a value);
// arrays are replaced whole, because a list edited in the admin is the full list.
export function mergeContent(base, over) {
  if (over === undefined || over === null) return base
  if (Array.isArray(base) || Array.isArray(over)) return Array.isArray(over) ? over : base
  if (typeof base === 'object' && base !== null && typeof over === 'object') {
    const out = { ...base }
    for (const k of Object.keys(over)) out[k] = mergeContent(base[k], over[k])
    return out
  }
  return typeof over === typeof base || base === undefined ? over : base
}

const CACHE_KEY = 'vc-content-cache'
export const DRAFT_KEY = 'vc-admin-draft'
const PREVIEW_FLAG = 'vc-preview'
const PREVIEW_DRAFT = 'vc-preview-draft'

// Published content is read from the backend (its own project, shared with the admin panel).
// Without an address the site simply shows its built-in content.
const CONTENT_URL =
  import.meta.env.VITE_CONTENT_URL || (import.meta.env.DEV ? 'http://localhost:5175/api/content' : '')
// The admin panel (another project again) sends its unpublished draft for Preview.
const ADMIN_ORIGIN = (() => {
  try {
    const url = import.meta.env.VITE_ADMIN_URL || (import.meta.env.DEV ? 'http://localhost:5174' : '')
    return url ? new URL(url).origin : ''
  } catch {
    return ''
  }
})()

const read = (store, key) => {
  try {
    const raw = store.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

/**
 * Preview mode: the admin opens the site with ?preview=1 and, once asked, sends
 * its unpublished draft by message. It is kept for this browser tab only.
 */
function inPreview() {
  try {
    const params = new URLSearchParams(window.location.search)
    if (params.has('preview')) sessionStorage.setItem(PREVIEW_FLAG, '1')
    if (params.has('exit-preview')) sessionStorage.removeItem(PREVIEW_FLAG)
    return sessionStorage.getItem(PREVIEW_FLAG) === '1'
  } catch {
    return false
  }
}

export function exitPreview() {
  try {
    sessionStorage.removeItem(PREVIEW_FLAG)
    sessionStorage.removeItem(PREVIEW_DRAFT)
  } catch {
    /* storage unavailable */
  }
  window.location.href = window.location.pathname
}

const ContentContext = createContext({ content: defaultContent, preview: false })

export function ContentProvider({ children }) {
  const [previewing] = useState(() => typeof window !== 'undefined' && inPreview())
  const [draft, setDraft] = useState(() => (previewing ? read(sessionStorage, PREVIEW_DRAFT) : null))
  // Start from the last published content this browser saw, so repeat visits don't flash old text.
  const [published, setPublished] = useState(() => (typeof window === 'undefined' ? null : read(localStorage, CACHE_KEY)))

  // preview: ask the admin tab that opened this one for its draft
  useEffect(() => {
    if (!previewing || !ADMIN_ORIGIN) return
    const onMessage = (e) => {
      if (e.origin !== ADMIN_ORIGIN || e.data?.type !== 'vc-preview-draft' || typeof e.data.draft !== 'object') return
      setDraft(e.data.draft)
      try {
        sessionStorage.setItem(PREVIEW_DRAFT, JSON.stringify(e.data.draft))
      } catch {
        /* too large for session storage: preview lasts until this page reloads */
      }
    }
    window.addEventListener('message', onMessage)
    try {
      window.opener?.postMessage({ type: 'vc-preview-ready' }, ADMIN_ORIGIN)
    } catch {
      /* opener gone */
    }
    return () => window.removeEventListener('message', onMessage)
  }, [previewing])

  useEffect(() => {
    if (!CONTENT_URL) return
    let alive = true
    const url = new URL(CONTENT_URL, window.location.origin)
    url.searchParams.set('fresh', '1')
    fetch(url, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!alive || !data || typeof data.content !== 'object') return
        setPublished(data.content)
        try {
          if (data.content) localStorage.setItem(CACHE_KEY, JSON.stringify(data.content))
          else localStorage.removeItem(CACHE_KEY)
        } catch {
          /* storage full or blocked */
        }
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  const value = useMemo(
    () => ({ content: mergeContent(defaultContent, draft || published), preview: !!draft }),
    [draft, published]
  )

  // keep the browser tab title and description in step with the admin settings
  useEffect(() => {
    const { seoTitle, seoDescription } = value.content.site
    if (seoTitle) document.title = seoTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta && seoDescription) meta.setAttribute('content', seoDescription)
  }, [value])

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

/** All site content (defaults + published edits). */
export const useContent = () => useContext(ContentContext).content
export const usePreviewMode = () => useContext(ContentContext).preview
/** One page's sections, e.g. usePage('home').hero */
export const usePage = (name) => useContext(ContentContext).content.pages[name] || {}

/** Replace {checkIn}, {phone}, {room}… tokens in admin-edited text. */
export function fill(text, vars) {
  return String(text ?? '').replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m))
}

/** Lines for a heading: accepts an array or a single string. */
export const lines = (v) => (Array.isArray(v) ? v.filter((l) => l !== '') : v ? [v] : [])
