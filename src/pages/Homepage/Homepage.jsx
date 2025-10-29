import React from 'react'
import Style from "./Homepage.module.scss"
import LeaderShip from './components/Leadership/LeaderShip'
import PartnerShip from './components/PartnerShip/PartnerShip'

const Homepage = () => {
  return (
     <div className={Style.homepage}>
      <PartnerShip/>
      <LeaderShip/>
     </div>
  )
}

export default Homepage