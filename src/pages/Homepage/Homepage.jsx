import Header from "../../components"
import Carousel from "../../components/Carousel"

function Homepage() {
  return (
    <div>
      <Header/>
      <Carousel numberOfSlide={1} category={"Trending"} />
      <Carousel numberOfSlide={6} category={"Horror"} isUseNavigation title="Horror Movies" />
      <Carousel numberOfSlide={6} category={"Comedy"} isUseNavigation />
    </div>
  )
}

export default Homepage