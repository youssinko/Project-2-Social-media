import React from 'react'
import "../LogoSearch/LogoSearch.css"
import Logo from "../../img/chat.webp"
import {UilSearch} from '@iconscout/react-unicons'

function LogoSearch() {
  return (
    <div className='LogoSearch'>
    <img src={Logo} alt='' style={{width:"150px"}} />
    <div className='search'>
      <input type="text" placeholder='#Explore' />
      <div className='s-icon'>
      <UilSearch />
      </div>
    </div>
    </div>
  )
}

export default LogoSearch