import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import OfferPopup from '../components/OfferPopup'
function Home() {
  return (
    <>
          <OfferPopup />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default Home