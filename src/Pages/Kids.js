import React from 'react'
import Header1 from "../components/Header1"
import Leftkid from '../components/Leftkid/Leftkid'
import Rightkid from '../components/Rightkid.js/Rightkid'
import Midkid from '../components/Midkid/Midkid'

const Kids = () => {
  return (
    <div className="h-[135vh] bg-black -z-50">
      <Header1/>
      <Leftkid/>
      <Midkid/>
      <Rightkid/>
    </div>
  )
}

export default Kids
