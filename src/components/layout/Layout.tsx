import React from 'react';
import { SideBar } from '../sideBar/component';
import { Body } from '../body/component';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
   return (
      <>
         <SideBar />
         <Body />
         {/* <Outlet /> */}
      </>
   );
};
