import { useApp } from '../store/AppContext'

export default function Skills(){
  const { content } = useApp()
  const cards = content.skills.cards ?? []

  return (
    <section id="skills" className="container mx-auto px-4 pt-8 pb-12">
      <div className="mx-auto max-w-[1140px]">
       
        <h2 className="text-[48px] leading-[48px] font-semibold text-[#1F2937] dark:text-slate-100">
          {content.skills.title}
        </h2>

   
        <div className="mt-6 flex flex-wrap justify-center md:justify-start items-start gap-[120px]">
          {cards.map((c, i) => (
            <article key={i} className="w-[300px] h-[104px] relative">
            
              <h3 className="text-[30px] leading-[28px] font-medium text-[#4338CA]">
                {c.title}
              </h3>

         
              <p className="mt-[28px] w-[300px] h-[48px] text-[12px] leading-4 text-[#6B7280] dark:text-slate-300">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
