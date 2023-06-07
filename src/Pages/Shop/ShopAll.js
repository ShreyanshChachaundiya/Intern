import React from 'react'
import Navbar from "../../components/Navbar";
import LeftBar from '../../components/Leftbar/LeftBar';
import RightBar from '../../components/RightBar/RightBar';
import ShopMid from '../../components/Shop/ShopMid';

const ShopAll = () => {
  return (
    <div>
      <Navbar/>
      <LeftBar/>
      <ShopMid/>
      <RightBar/>
    </div>
  )
}

export default ShopAll
