import React from 'react';

import { Layout } from './layout/Layout';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Body } from './body/component';
import { useAppDispatch } from '../hooks';

export const App = (): JSX.Element => {
   const navigate = useNavigate();

   React.useEffect((): any => {
      const goHome = () => navigate('/2/notes');
      return goHome();
   }, []);

   return (
      <div className="App">
         <div className="container ">
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route path="/:id/*" element={<Body />} />
               </Route>
            </Routes>
         </div>
      </div>
   );
};
