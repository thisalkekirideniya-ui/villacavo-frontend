import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PageHero, Reveal, SectionHeading, Eyebrow, ease } from '../components/ui'
import Icon from '../components/Icon'
import { useContent, usePage, lines, fill } from '../lib/content'

export default function Contact() {
  const { contact } = useContent()
  const { hero, cards: cardCopy, form: formCopy, faq } = usePage('contact')
  const subjects = lines(formCopy.subjects)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: subjects[0] || 'General enquiry', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } = import.meta.env
    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setError(`Email sending is not configured. Please email us at ${contact.email}.`)
      return
    }

    const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[char])

    setSending(true)
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: VITE_EMAILJS_SERVICE_ID,
          template_id: VITE_EMAILJS_TEMPLATE_ID,
          user_id: VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            to_email: 'villacavo@gmail.com',
            reply_to: form.email.trim(),
            name: form.name.trim(),
            name_html: escapeHtml(form.name.trim()),
            email: form.email.trim(),
            email_html: escapeHtml(form.email.trim()),
            phone_html: escapeHtml(form.phone.trim() || 'Not provided'),
            subject: form.subject,
            subject_html: escapeHtml(form.subject),
            message_html: escapeHtml(form.message.trim()),
          },
        }),
      })
      if (!response.ok) {
        const detail = await response.text()
        throw new Error(`Email delivery failed (${response.status})${detail ? `: ${detail}` : '.'}`)
      }
      setSent(true)
    } catch (err) {
      console.error('Contact form email failed', err)
      setError(err instanceof Error ? err.message : 'Unable to send your message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const cards = [
    { icon: 'phone', t: cardCopy.callLabel, v: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: 'mail', t: cardCopy.emailLabel, v: contact.email, href: `mailto:${contact.email}` },
    { icon: 'pin', t: cardCopy.visitLabel, v: cardCopy.visitText, href: contact.mapLink },
    { icon: 'clock', t: cardCopy.hoursLabel, v: cardCopy.hoursText, href: null },
  ].filter((c) => c.v)
  const [thanksBefore, thanksAfter = ''] = String(formCopy.thanksText || '').split('{email}')

  return (
    <>
      {!hero.hidden && <PageHero eyebrow={hero.eyebrow} title={lines(hero.title)} text={hero.text} image={hero.image} />}

      {!cardCopy.hidden && (
      <section className="relative overflow-hidden bg-white py-20">
        <div className="container-luxe">
        <div className="grid grid-cols-2 gap-px border border-ink/10 bg-ink/10 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Inner = (
              <>
                <Icon name={c.icon} className="h-6 w-6 text-terra-500 sm:h-7 sm:w-7" />
                <p className="mt-4 font-caps text-[10px] tracking-[0.2em] text-ink-mute sm:mt-6 sm:text-[11px] sm:tracking-[0.3em]">{c.t}</p>
                <p className="mt-2 break-words font-display text-lg leading-snug text-ink sm:text-2xl">{c.v}</p>
              </>
            )
            return (
              <Reveal key={i} delay={i * 0.08} className="bg-white">
                {c.href ? (
                  <a href={c.href} target={c.icon === 'pin' ? '_blank' : undefined} rel="noreferrer" className="block h-full p-5 transition-colors hover:bg-cream sm:p-8">{Inner}</a>
                ) : (
                  <div className="h-full p-5 sm:p-8">{Inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>
        </div>
      </section>
      )}

      {!formCopy.hidden && (
      <section className="relative overflow-hidden bg-white pb-24 sm:pb-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading eyebrow={formCopy.eyebrow} title={lines(formCopy.title)} />
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-12 border border-terra-500/30 bg-terra-50 p-10">
                  <h3 className="text-3xl text-ink">{fill(formCopy.thanksTitle, { name: form.name.split(' ')[0] || 'friend' })}</h3>
                  <p className="mt-3 text-[16px] text-ink-soft">{thanksBefore}{formCopy.thanksText?.includes('{email}') && <a className="text-terra-500" href={`mailto:${contact.email}`}>{contact.email}</a>}{thanksAfter}</p>
                  <button onClick={() => setSent(false)} className="btn-outline mt-8">{formCopy.sendAnotherLabel}</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="mt-12 grid gap-8 sm:grid-cols-2" exit={{ opacity: 0 }}>
                  <Field label={formCopy.nameLabel} className="sm:col-span-1"><input required value={form.name} onChange={set('name')} className="input-luxe" placeholder={formCopy.namePlaceholder} /></Field>
                  <Field label={formCopy.emailLabel}><input required type="email" value={form.email} onChange={set('email')} className="input-luxe" placeholder={formCopy.emailPlaceholder} /></Field>
                  <Field label={formCopy.phoneLabel}><input value={form.phone} onChange={set('phone')} className="input-luxe" placeholder={formCopy.phonePlaceholder} /></Field>
                  <Field label={formCopy.subjectLabel}>
                    <select value={form.subject} onChange={set('subject')} className="input-luxe">
                      {subjects.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </Field>
                  <Field label={formCopy.messageLabel} className="sm:col-span-2"><textarea required rows={5} value={form.message} onChange={set('message')} className="input-luxe resize-none" placeholder={formCopy.messagePlaceholder} /></Field>
                  <div className="sm:col-span-2">
                    {error && <p role="alert" className="mb-4 text-sm text-terra-600">{error}</p>}
                    <button type="submit" disabled={sending} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
                      {sending ? 'Sending...' : formCopy.buttonLabel}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-6">
            <Reveal className="arch h-full min-h-[360px] overflow-hidden border border-ink/10 sm:min-h-[480px]">
              <iframe
                title="Villa Cavo location map"
                src={contact.mapEmbed}
                className="h-full min-h-[480px] w-full grayscale-[60%] sepia-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>
      )}

      {!faq.hidden && (
      <section className="bg-terra-500 py-24 sm:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading light eyebrow={faq.eyebrow} title={lines(faq.title)} />
          </div>
          <div className="lg:col-span-8">
            <Faq faqs={faq.items || []} />
          </div>
        </div>
      </section>
      )}
    </>
  )
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="label-luxe">{label}</span>
      {children}
    </label>
  )
}

function Faq({ faqs }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="border-t border-white/20">
      {faqs.map((f, i) => (
        <Reveal key={i} delay={i * 0.05} className="border-b border-white/20">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={open === i}>
            <span className="font-display text-2xl text-white sm:text-3xl">{f.q}</span>
            <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-3xl font-light text-white">+</motion.span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease }} className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-[16px] leading-relaxed text-white/80">{f.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      ))}
    </div>
  )
}
