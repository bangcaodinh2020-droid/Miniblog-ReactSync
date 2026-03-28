import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {MiniBlog} from './App.tsx'
import { mockData } from './mockData.tsx';
import router from "./router.tsx";
import { RouterProvider } from 'react-router-dom';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap Icons
//import 'bootstrap-icons/font/bootstrap-icons.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = { router}/>
    <MiniBlog id="miniblog" data={{
      syncData:{
        count:10,
        posts:mockData,
        activeMenu: "",
        selectedPost:{},

      }}}></MiniBlog>
      
  </StrictMode>,
)
