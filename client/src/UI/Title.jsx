
const Title = ({firstTitle,secendTitle}) => {
  return (
    <div>
        <div className="content mx-10 my-8  flex items-center text-[36px] font-bold">
            <p className=" text-black ">{firstTitle}</p>. <p className=" text-[#6b7280] mt-[2px]">{secendTitle}</p>
        </div>
    </div>
  )
}

export default Title