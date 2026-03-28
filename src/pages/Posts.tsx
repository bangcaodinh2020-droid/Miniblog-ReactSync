
import { useChanel } from "@bangcao2020/reactsync";
import { PostItem } from "../components/PostItem";
import { useEffect } from "react";

import MainLayout from "../layouts/MainLayout";


export default function Posts(props: any) {
  const [posts,] = useChanel("posts", [], props);
  const [, setActiveMenu] = useChanel("activeMenu", "", props);
  useEffect(()=>{
        setActiveMenu("posts");
  }, [])
  
  return (
    
      <MainLayout>
          {
            posts.map((post: any, index: number) => {
              return <PostItem post={post} key={index}></PostItem>
        
            })
          }
      </MainLayout>
   
  );
};