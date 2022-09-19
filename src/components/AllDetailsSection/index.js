import ProfileSection from '../ProfileSection'
import About from '../About'
import Services from '../Services'
import Portfolio from '../Portfolio'
import Videos from '../Videos'
import Clients from '../Clients'
import Reviews from '../Reviews'

import './index.css'

const AllDetailsSection = () => (
  <div className="bg-container">
    <ProfileSection />
    <About />
    <Services />
    <Portfolio />
    <Videos />
    <Clients />
    <Reviews />
    <p className="paragraph">AllRightsReserved. Powered by Tako Card</p>
  </div>
)

export default AllDetailsSection
