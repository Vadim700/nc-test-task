import React from 'react';
import { SideBar } from '../sideBar/component';

import { Outlet } from 'react-router-dom';

export const Layout = () => {
   return (
      <>
         <SideBar />
         <Outlet />
      </>
   );
};
