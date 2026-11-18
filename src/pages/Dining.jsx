import { motion } from 'framer-motion'
import { PageHero, Reveal, Img, SectionHeading, CurtainImg, ParallaxImg, MaskText, Ornament, CtaBand, Eyebrow, ease } from '../components/ui'
import { Fireflies } from '../components/magic'
import { usePage, lines } from '../lib/content'

export default function Dining() {
  const { hero, care, venues, quote, cta } = usePage('dining')
  const items = (care.items || []).filter((it) => it.title || it.text)
  return (
    <>
      {!hero.hidden && <PageHero eyebrow={hero.eyebrow} title={lines(hero.title)} text={hero.text} image={hero.image} />}

      {/* Private chef, personal butler & village cooking */}
      {!care.hidden && (
        <section className="relative overflow-hidden bg-white pt-24 sm:pt-32">
          <div className="container-luxe text-center">
            <Reveal><Eyebrow center>{care.eyebrow}</Eyebrow></Reveal>
            <MaskText lines={lines(care.title)} className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl" />
            <Ornament className="mt-8" />
          </div>
          <div className="mt-16 sm:mt-20">
            {items.map((it, i) => (
              <CareRow key={i} item={it} i={i} />
            ))}
          </div>
        </section>
      )}

      {/* Dining venues */}
      {!venues.hidden && (
        <section className="relative overflow-hidden bg-white py-24 sm:py-32">
          <div className="container-luxe">
            <SectionHeading center eyebrow={venues.eyebrow} title={venues.title} />
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {(venues.items || []).map((v, i) => (
                <Reveal key={i} delay={i * 0.12} className="group">
                  <div className="overflow-hidden">
                    <Img src={v.image} alt={v.title} className="aspect-[4/5] w-full object-cover transition-transform duration-[1.6s] group-hover:scale-110" />
                  </div>
                  <h3 className="mt-6 text-3xl text-ink">{v.title}</h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{v.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {!quote.hidden && (
        <section className="relative">
          <ParallaxImg src={quote.image} alt="" className="h-[60vh] min-h-[400px]" />
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white">
            <MaskText lines={lines(quote.lines)} className="font-display text-4xl italic sm:text-6xl" />
          </div>
        </section>
      )}

      <CtaBand data={cta} />
    </>
  )
}

function CareRow({ item, i }) {
  const flip = i % 2 === 1
  const dark = !!item.dark
  return (
    <div className={`relative overflow-hidden ${dark ? 'bg-ink py-24 text-white sm:py-32' : 'py-16 sm:py-24'}`}>
      {dark && (
        <>
          {/* warm glow of a wood fire, with embers drifting up */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-terra-500/30 blur-3xl"
            animate={{ opacity: [0.55, 1, 0.7, 0.95, 0.55], scale: [1, 1.06, 0.98, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <Fireflies count={26} color="rgba(255,170,90,0.95)" />
        </>
      )}
      <div className="container-luxe relative grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <div className={`relative lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
          <CurtainImg src={item.image} alt={item.alt || item.title} className={`aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] ${i === 1 ? 'arch' : ''}`} />
        </div>
        <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
          <Reveal><Eyebrow light={dark}>{item.label}</Eyebrow></Reveal>
          <MaskText lines={lines(item.title)} className={`mt-5 text-4xl leading-[1.08] sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`} />
          <Reveal delay={0.2}>
            <motion.span
              aria-hidden
              className={`mt-8 block h-px w-24 origin-left ${dark ? 'bg-terra-200' : 'bg-terra-500'}`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease }}
            />
            <p className={`mt-8 text-[17px] leading-relaxed ${dark ? 'text-white/80' : 'text-ink-soft'}`}>{item.text}</p>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
