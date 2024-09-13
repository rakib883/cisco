
import BestSeller from "../Component/BestSeller/BestSeller"
import Blogarea from "../Component/Blog-area/Blogarea"
import DiscoverMore from "../Component/DiscoverMore/DiscoverMore"
import EarnMony from "../Component/EarnFreeMoney/EarnMony"
import Explore from "../Component/ExplorArea/Explore"
import Facality from "../Component/Facality/Facality"
import Banner from "../Component/HomeBanner/Banner"
import NewArrival from "../Component/NewArrival/NewArrival"
import Reviwe from "../Component/Review/Reviwe"
import ShopBrand from "../Component/ShopByBrand/ShopBrand"
import Slider from "../Component/Slider/Slider"
import SpecialOffer from "../Component/SpecialOffer/SpecialOffer"
import WhatsTrading from "../Component/WhatsTrading/WhatsTrading"
import Seperator from "../UI/Seperator"

const Home = () => {
  return (
    <div className="">
        <Slider/>
        <DiscoverMore/>
        <NewArrival/>
        <Seperator/>
        <Facality/>
         <Seperator/>
         <EarnMony/>
         <Explore/>
         <BestSeller/>
         <Banner/>
         <ShopBrand/>
         <SpecialOffer/>
         <WhatsTrading/>
         <Blogarea/>
         <Reviwe/>
    </div>
  )
}

export default Home