import React from 'react';
import Brand from './Brand';
import Navigasi from './Navigasi';

function Navbar() {
  return (
    <div className='h-20 items-center w-screen flex justify-between px-[7%] bg-transparent'>
      <Brand />
      <Navigasi />
    </div>
  );
}

export default Navbar;
