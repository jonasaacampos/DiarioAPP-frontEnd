import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';

const AppRoutes = () => {
   ReactDOM.render(
      <Router>
         <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
         </Routes>
      </Router>
   )

}

export default AppRoutes;