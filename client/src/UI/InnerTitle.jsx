import { twMerge } from "tailwind-merge"

const InnerTitle = ({className,title}) => {
  const titleClass = twMerge( `text-[36px] my-4 font-bold font-sans text-[#111827]`,className ? className : "")
  return (
    <div>
        <div className="content">
            <p className={titleClass}>{title}</p>
        </div>
    </div>
  )
}

export default InnerTitle