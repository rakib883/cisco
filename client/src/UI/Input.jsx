
const Input = ({title,placeholder}) => {
  return (
    <div>
        <div className="item flex flex-col gap-1">
            <p1 className=" text-[16px]">{title}</p1>
            <input type="text" placeholder={placeholder} className=" outline-none border px-2 py-2" />
        </div>
    </div>
  )
}

export default Input