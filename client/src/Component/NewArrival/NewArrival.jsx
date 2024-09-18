import Slider from "../../UI/Slider"
import Title from "../../UI/Title"

const NewArrival = () => {
  return (
    <div>
      <div className="content mt-[50px] lg:mt-[100px]">
         <div className="title">
            <Title firstTitle="New Arrivals. REY backpacks & bags"/>
         </div>
         <div className="content">
           <Slider dataLink="https://cisco-sigma.vercel.app/product"/>
         </div>
      </div>
    </div>
  )
}

export default NewArrival