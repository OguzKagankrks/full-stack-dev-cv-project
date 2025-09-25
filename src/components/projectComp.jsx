
import { useApp } from '../store/AppContext'
import projectsEN from '../data/projects.en.json'
import projectsTR from '../data/projects.tr.json'
import { postWorkintech } from '../api/client'


function resolveImg(file) {
  if (!file) return ''
  return file.startsWith('http')
    ? file
    : new URL(`../assets/${file}`, import.meta.url).href
}

export default function ProjectComp() {
  const { content, state } = useApp()
  const list = state.lang === 'tr' ? projectsTR : projectsEN


  const track = (p, target) =>
    postWorkintech({
      source: 'projects',
      target, 
      id: p.id,
      title: p.title,
      lang: state.lang,
      ts: Date.now(),
    }).catch(() => {})

  
  return (
    <section id="projects" className="container mx-auto px-4 pt-8 pb-16">
      <div className="mx-auto max-w-[1140px]">
      
        <div className="h-px w-full border-t border-[#BAB2E7]" />

      
        <h2 className="mt-8 text-[48px] leading-[48px] font-semibold text-[#1F2937] dark:text-slate-100">
          {content.projects?.title ?? 'Projects'}
        </h2>

        <div className="mt-6 flex flex-wrap gap-[120px]">
          {list.map((p) => (
            <article key={p.id} className="w-[300px] flex flex-col gap-[18px]">
              <img
                src={resolveImg(p.img)}
                alt={p.title}
                className="w-[300px] h-[180px] object-cover rounded"
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />

              <a
                href={p.site}
                target="_blank"
                rel="noreferrer"
                onClick={() => track(p, 'site')}
                className="text-[30px] leading-[28px] font-medium text-[#4338CA] hover:underline"
              >
                {p.title}
              </a>

              <p className="text-[14px] leading-[18px] text-[#6B7280] dark:text-slate-300">
                {p.desc}
              </p>

              <ul className="flex flex-row flex-wrap items-start gap-[6px]">
                {p.tags.map((t, i) => (
                  <li
                    key={`${p.id}-${t}-${i}`}
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
                  rel="noreferrer"
                  onClick={() => track(p, 'github')}
                  className="text-[16px] leading-4 underline text-[#3730A3] hover:opacity-80"
                >
                  Github
                </a>
                
                <a
                  href={p.site}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track(p, 'site')}
                  className="text-[16px] leading-4 underline text-[#3730A3] hover:opacity-80"
                >
                  {state.lang === 'tr' ? 'Siteyi Gör' : 'View Site'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
