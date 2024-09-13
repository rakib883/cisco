
import Title from '../../UI/Title'
import DiscoverSlider from '../DiscoverSlider/DiscoverSlide'


const DiscoverMore = () => {
  return (
    <div>
        <div className="content mt-[100px]">
            <div className="title">
                <Title firstTitle="Discover more" secendTitle="Good things are waiting for you"/>
            </div>
            <div className="slider">
               <DiscoverSlider/>
            </div>
        </div>
    </div>
  )
}

export default DiscoverMore