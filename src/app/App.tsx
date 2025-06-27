import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Pages/HomePage';
import JobsPage from '../Pages/JobsPage';
import NotFound from '../Pages/NotFound';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {  
  return (
      <RouterProvider router={router} />
  )
}

export default App
