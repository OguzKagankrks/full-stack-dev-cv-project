
import { useApp } from '../store/AppContext'

export default function Profile(){
  const { content } = useApp()
  const f = content.profile

  return (
    <section id="about" className="container mx-auto px-4 pt-8 pb-12">
      <div className="mx-auto max-w-[1140px]">
  
        <div className="h-px w-full border-t border-[#BAB2E7]" />

     
        <h2 className="mt-8 text-[48px] leading-[48px] font-semibold text-[#1F2937] dark:text-slate-100">
          {f.title}
        </h2>

     
        <div className="mt-6 flex flex-col md:flex-row md:justify-between gap-10">
   
          <div className="w-full md:w-[412.08px]">
     
            <a className="text-[30px] leading-[28px] font-medium text-[#4338CA]">
              {f.leftTitle}
            </a>

          
            <dl className="mt-4 grid grid-cols-[155.65px,1fr] gap-y-2 text-[18px] leading-[36px] tracking-[0.01em]">
              {f.fields.map((x, i) => (
                <div key={i} className="contents">
                  <dt className="font-semibold text-black dark:text-slate-200">{x.label}</dt>
                  <dd className="font-normal text-black dark:text-slate-300">{x.value}</dd>
                </div>
              ))}
            </dl>
          </div>

 
          <div className="w-full md:w-[576.9px]">
            <a className="text-[30px] leading-[28px] font-medium text-[#4338CA]">
              {f.rightTitle}
            </a>
            <p className="mt-4 text-[18px] leading-[27px] text-[#6B7280] dark:text-slate-300">
              {f.p1}
            </p>
            <p className="mt-4 text-[18px] leading-[27px] text-[#6B7280] dark:text-slate-300">
              {f.p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
