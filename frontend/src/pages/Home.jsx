import Header from '../components/Header.jsx'
import Banner from '../components/Banner.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Gallery from '../components/Gallery.jsx'
import Reviews from '../components/Reviews.jsx'
import FAQ from '../components/FAQ.jsx'
import BookingCTA from '../components/BookingCTA.jsx'
import Footer from '../components/Footer.jsx'
import '../components/components.css'
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <About />
        <Services />
        <Gallery />
        <Reviews />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
    </>
  )
}

export default Home
