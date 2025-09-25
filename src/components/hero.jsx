
import { useApp } from '../store/AppContext'

export default function Hero() {
  const { content, state } = useApp()


  const hero = {
    nameLabel: content.hero.nameLabel ?? (state.lang === 'tr' ? 'İsim' : 'Name'),
    name:      content.hero.name      ?? 'Oguz Kagan',
    headline:  content.hero.headline  ?? content.hero.title,     
    desc:      content.hero.desc      ?? content.hero.subtitle, 
    cta:       content.hero.cta,
  }

  return (
    <section id="hero" className="container mx-auto px-4 pt-12 pb-16">
      <div className="mx-auto max-w-[1140px] grid md:grid-cols-[596px,1fr] gap-8 items-start">

        <div className="w-full md:w-[596px]">

          <div className="flex items-center gap-3">
            <span className="text-[14px] leading-7 font-medium text-slate-900 dark:text-slate-200">
              {hero.nameLabel}
            </span>
            <div className="h-px w-[102px] bg-[#4338CA] border border-[#3730A3]" />
          </div>

    
          <div className="mt-1 text-[20px] leading-7 font-medium text-[#4338CA]">
            {hero.name}
          </div>

     
          <h1 className="mt-6 text-[56px] leading-[56px] md:text-[72px] md:leading-[72px] font-bold text-[#1F2937] dark:text-slate-100">
            {hero.headline}
          </h1>

          
          <p className="mt-6 max-w-[553px] text-[18px] leading-[28px] text-[#6B7280] dark:text-slate-300">
            {hero.desc}
          </p>

   
          <div className="mt-10 flex flex-wrap items-center gap-3">
          
            <a
              href=""
              className="inline-flex h-[52px] items-center justify-center rounded-[6px] bg-[#3730A3] px-8 text-[18px] leading-7 font-medium text-white"
            >
              {state.lang === 'tr' ? 'Beni işe al' : 'Hire me'}
            </a>

      
            <a
              href={"https://github.com/OguzKagankrks" ?? '#'}
              target="_blank"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[6px] border border-[#3730A3] bg-white px-5 dark:bg-transparent"
            >
              <span className="inline-block w-[26px] h-[26px] rounded bg-[#3730A3]" />
              <span className="text-[18px] leading-7 font-medium text-[#3730A3]">Github</span>
            </a>

       
            <a
              href={content.footer?.links?.linkedin ?? '#'}
              target="_blank"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-[6px] border border-[#3730A3] bg-white px-5 dark:bg-transparent"
            >
              <span className="inline-block w-[24px] h-[25px] rounded bg-[#3730A3]" />
              <span className="text-[18px] leading-7 font-medium text-[#3730A3]">Linkedin</span>
            </a>
          </div>
        </div>

      
        <div className="hidden md:block justify-self-end">
          <img
            src={new URL('../assets/hero-office.png', import.meta.url).href} 
            alt="Hero"
            className="w-[476px] h-[375px] object-cover rounded-[18px]"
            style={{
              boxShadow:
                '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
            }}
          />
        </div>
      </div>
    </section>
  )
}
