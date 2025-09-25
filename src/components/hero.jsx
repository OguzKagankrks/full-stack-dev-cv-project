
import { useApp } from '../store/AppContext'

export default function Hero() {
  const { content } = useApp()   
  return (
    <section id="hero" className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold">{content.hero.title}</h1>
      <p className="mt-2 text-lg opacity-80">{content.hero.subtitle}</p>
      <a
        href="#contact"
        className="mt-6 inline-block px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black"
      >
        {content.hero.cta}
      </a>
    </section>
  )
}
