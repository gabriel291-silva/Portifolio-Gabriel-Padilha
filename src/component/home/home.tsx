import "./home.scss"
import SectionCAtegory from "./sectionCategory/sectionCategory.tsx"
import ShelfHome from "./shelfHome/shelfHome.tsx"
import SliderBanner from "./sliderBanner/sliderbanner.tsx"
function Home(){
    return(<div className="home">

        <SliderBanner/>
        <SectionCAtegory/>
        <ShelfHome/>
        <ShelfHome/>

    </div>)
}

export default Home