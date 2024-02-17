import AboutHome from "@/components/AboutHome/AboutHome";
import BookHome from "@/components/BookHome/BookHome";
import FeaturedPlaces from "@/components/FeaturedPlaces/FeaturedPlaces";
import FeaturedVideos from "@/components/FeaturedVideos/FeaturedVideos";
import Header from "@/components/Header/Header";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import Beyond from "../components/Beyond";
import TopDesination from "../components/TopDesination";
import Offfer from "../components/Offfer";
import PromotionalTour from "../components/PromotionalTour";
import Destination from "../components/Destination";
import LatestTravelNews from "../components/LatestTravelNews";


export default function Home() {
  return (
    <main>
      <Header />
     <Beyond/>
     <TopDesination/>
      <FeaturedPlaces/>
      <Offfer/>
      <FeaturedVideos/>
      <AboutHome/>
      <Services/>
      
      <Testimonials/>
      <LatestBlogs/>
      <BookHome/>

      <PromotionalTour/>
<Destination/>

<LatestTravelNews/> 
    </main>
  )
}
