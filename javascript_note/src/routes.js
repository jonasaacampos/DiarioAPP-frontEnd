import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/home';
import RegisterScreen from './screens/auth/register';
import LoginScreen from './screens/auth/login';
import NotesScreen from './screens/notes/index';
import UserEditScreen from './screens/users/edit';

const AppRoutes = () => (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}>      
            <Route index element={<HomeScreen/>} />
            <Route exact path='/login' element={<LoginScreen />} />
            <Route exact path='/register' element={<RegisterScreen />} />
            <Route path='notes' element={<NotesScreen/>} />
            <Route path='users/edit' component={<UserEditScreen/>} />
         </Route>
      </Routes>
   </BrowserRouter>
)


export default AppRoutes;