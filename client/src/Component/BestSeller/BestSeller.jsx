import Slider from "../../UI/Slider"
import Title from "../../UI/Title"
const BestSeller = () => {
  return (
    <div>
        <div className="content">
            <div className="title">
                <Title  firstTitle="Best Sellers.Best selling of the month" />
            </div>
            <div className="product">
                <Slider dataLink="https://cisco-sigma.vercel.app/product"/>
            </div>
        </div>
    </div>
  )
}

export default BestSeller