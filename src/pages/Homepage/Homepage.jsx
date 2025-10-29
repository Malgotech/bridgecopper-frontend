import React from 'react'
import Style from "./Homepage.module.scss"
import LeaderShip from './components/Leadership/LeaderShip'

const Homepage = () => {
  return (
     <div className={Style.homepage}>
      <LeaderShip/>
     </div>
  )
}

export default Homepage