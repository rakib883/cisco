import Slider from "../../UI/Slider"
import Title from "../../UI/Title"

const NewArrival = () => {
  return (
    <div>
      <div className="content mt-[100px]">
         <div className="title">
            <Title firstTitle="New Arrivals " secendTitle="REY backpacks & bags" />
         </div>
         <div className="content">
           <Slider dataLink="http://localhost:3000/product"/>
         </div>
      </div>
    </div>
  )
}

export default NewArrival