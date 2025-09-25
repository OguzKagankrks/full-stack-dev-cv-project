import { useApp } from '../store/AppContext'

export default function SkillsComp() {
  const { content, state } = useApp()
  const title = content.skills?.title ?? (state.lang === 'tr' ? 'Yetenekler' : 'Skills')
  const cards = content.skills?.cards ?? []

  return (
    <section id="skills" className="container mx-auto px-4 pt-[0] pb-16">
      <div className="mx-auto max-w-[1140px]">
   
        <h2 className="text-[48px] leading-[48px] font-semibold text-[#1F2937] dark:text-slate-100">
          {title}
        </h2>

     
        <div className="mt-[56px] flex flex-wrap justify-between gap-[120px]">
          {cards.map((c, i) => (
            <article key={i} className="relative w-[300px] h-[104px]">
      
              <h3 className="absolute left-0 top-0 text-[30px] leading-[28px] font-medium text-[#4338CA]">
                {c.title}
              </h3>

              <p className="absolute left-0 top-[56px] w-[300px] h-[48px] text-[12px] leading-[16px] text-[#6B7280] dark:text-slate-300">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
