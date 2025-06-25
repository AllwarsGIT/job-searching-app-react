import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import JobsPage from './Pages/JobsPage.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element={<JobsPage />} />
    </Route>
  )
);

function App() {  
  return (
      <RouterProvider router={router} />
  )
}

export default App
