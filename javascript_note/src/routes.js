import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';

const AppRoutes = () => (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" component={HomeScreen} />
         </Routes>
      </BrowserRouter>
)

export default AppRoutes;