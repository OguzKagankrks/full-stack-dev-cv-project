import { useApp } from '../store/AppContext'

export default function Footer(){
  const { content } = useApp()
  const f = content.footer

  return (
    <footer id="contact" className="bg-[#F9F9F9] dark:bg-slate-950">
      <div className="mx-auto max-w-[1140px] px-4 min-h-[409px] py-10 md:py-16 flex flex-col">
     
        <h2 className="max-w-[540px] text-[42px] leading-[52px] font-semibold text-[#1F2937] dark:text-slate-100">
          {f.cta}
        </h2>

        <div className="mt-[140px] flex items-center justify-between flex-col gap-6 md:flex-row">
   
          <a
            href={`mailto:${f.email}`}
            className="inline-flex items-center gap-[2px] h-[24px]"
          >
            <span className="text-[20px] leading-[24px] tracking-[0.05em] text-black dark:text-slate-100">👉</span>
            <span className="text-[20px] leading-[24px] tracking-[0.05em] underline text-[#AF0C48]">
              {f.email}
            </span>
          </a>

     
          <nav className="flex items-start gap-5 text-[18px] leading-[27px] tracking-[0.01em]">
            <a
              href={f.links.blog}
              target="_blank"
              className="text-[#0A0A14] dark:text-slate-200 hover:underline"
            >
              {f.labels.blog}
            </a>
            <a
              href={f.links.github}
              target="_blank"
              className="text-[#00AB6B] hover:underline"
            >
              Github
            </a>
            <a
              href={f.links.linkedin}
              target="_blank"
              className="text-[#0077B5] hover:underline"
            >
              Linkedin
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
