import { useApp } from '../store/AppContext'
import list from '../data/projects.json'

export default function Projects(){
  const { content } = useApp()

  return (
    <section id="projects" className="container mx-auto px-4 pt-8 pb-16">
      <div className="mx-auto max-w-[1140px]">

        <div className="h-px w-full border-t border-[#BAB2E7]" />

     
        <h2 className="mt-8 text-[48px] leading-[48px] font-semibold text-[#1F2937]">
          {content.projects.title}
        </h2>

   
        <div className="mt-6 flex flex-wrap gap-[120px]">
          {list.map(p => {
            const img = p.img?.startsWith('http')
              ? p.img
              : new URL(`../assets/${p.img}`, import.meta.url).href

            return (
              <article key={p.id} className="w-[300px] flex flex-col gap-[18px]">
          
                <img
                  src={img}
                  alt={p.title}
                  className="w-[300px] h-[180px] object-cover rounded"
                  loading="lazy"
                />

   
                <a
                  href={p.site}
                  target="_blank"
                  className="text-[30px] leading-[28px] font-medium text-[#4338CA] hover:underline"
                >
                  {p.title}
                </a>

             
                <p className="text-[14px] leading-[18px] text-[#6B7280]">
                  {p.desc}
                </p>

  
                <ul className="flex flex-row flex-wrap items-start gap-[6px]">
                  {p.tags.map((t, i) => (
                    <li
                      key={i}
                      className="inline-flex items-center px-[18px] py-[6px] h-[27px] rounded-[4px] border border-[#3730A3] bg-white dark:bg-transparent"
                    >
                      <span className="text-[14px] leading-[14px] font-medium tracking-[-0.05em] text-[#3730A3]">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-between items-start">
                  <a
                    href={p.github}
                    target="_blank"
                    className="text-[16px] leading-4 underline text-[#3730A3] hover:opacity-80"
                  >
                    Github
                  </a>
                  <a
                    href={p.site}
                    target="_blank"
                    className="text-[16px] leading-4 underline text-[#3730A3] hover:opacity-80"
                  >
                    View Site
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
