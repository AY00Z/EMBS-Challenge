import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import MoodChecker from './Pages/MoodChecker';
import PsychologistSreach from './Pages/PsychologistSearch';
import SignIn from './Pages/SignIn';
import Login from './Pages/Login'
import Chat from './Pages/Chat'
import TherapistSignin from './Pages/TherapistSignin';
import User from './Pages/User';
import TherapistPage from './Pages/TherapistPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/MoodChecker",
    element: <MoodChecker />
  },
  {
    path: "/PsychologistSearch",
    element: <PsychologistSreach />
  },
  {
    path: "/SignIn",
    element: <SignIn />
  },
  {
    path: "/TherapistSignin",
    element: <TherapistSignin/>
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Chat",
    element: <Chat />
  },
  {
    path: "/User",
    element: <User />
  },
  {
    path: "/TherapistPage",
    element: <TherapistPage/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
