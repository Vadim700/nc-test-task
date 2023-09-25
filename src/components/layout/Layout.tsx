import React from 'react';
import { SideBar } from '../sideBar/component';

import { Outlet } from 'react-router-dom';

const MemoizedOutlet = React.memo(Outlet);
const MemoizedSideBar = React.memo(SideBar);

export const Layout = React.memo(() => {
   return (
      <>
         <MemoizedSideBar />
         <MemoizedOutlet />
      </>
   );
});
