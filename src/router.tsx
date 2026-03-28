import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Posts from './pages/Posts.tsx'
import PostEditor from './pages/PostEditor.tsx'
import PostDetail from './pages/PostDetail.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  
    {
        path: "/about",
        element: <About />,
    },
    {
      path: "/posts",
      element: <Posts />,
    }, 
     {
      path: "/postdetail",
      element: <PostDetail />,
    }, 
       
    {
      path: "/edit",
      element: <PostEditor />,
    },   
  ]);

  export default router;