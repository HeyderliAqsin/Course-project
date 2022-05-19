
import Banner from '../components/banner/Banner'
import BestCourses from '../components/bestcourses/BestCourses'
import BestOnline from '../components/bestonline/BestOnline'
import Learn from '../components/learn/Learn'
import MiddleText from '../components/middletext/MiddleText'
import MultiPhoto from '../components/multiphoto/MultiPhoto'
import OnEdu from '../components/onedu/OnEdu'
import Opportunity from '../components/opportunity/Opportunity'
import Popular from '../components/popular/Popular'
import Quality from '../components/qualiity/Quality'
import Slider from '../components/slider/Slider'
import Trending from '../components/trending/Trending'
import VideoPart from '../components/videopart/VideoPart'

const Home = () => {
  return (
    <>
    <Slider/>
    <OnEdu />
    <Popular/>
    <Learn/>
    <Quality/>
    <Trending/>
    <BestOnline/>
    <MiddleText/>
    <BestCourses/>
    <MultiPhoto/>
    <VideoPart/>
    <Opportunity/>
    <Banner/>
    </>
  )
}

export default Home