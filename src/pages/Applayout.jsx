import React from 'react'
import SideBar from '../components/SideBar/SideBar';
import Map from '../components/Map/Map';
import User from '../components/User/User';

function Applayout() {
  return (
    <div className='app'>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default Applayout