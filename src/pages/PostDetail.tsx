import { useChanel } from "@bangcao2020/reactsync";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";

export default function PostDetail(props: any) {
  const [selectedPost, ] = useChanel("selectedPost", "", props);
  const [, setActiveMenu] = useChanel("activeMenu", "", props);
  const navigate = useNavigate();
  useEffect(()=>{
    setActiveMenu("postdetail");
  },[]);
  const onBackBtnClick = () => {
        navigate("/posts");
        
  };
  return (
      <MainLayout>
        <div  className="row p-5">
          <div  className="row">{selectedPost.title}</div>
          <div  className="row">{selectedPost.body}</div>
        
          <div className="row">
          <div className="col-1">
          <button className="rounded-1 bg-primary text-light m-2" onClick={onBackBtnClick}>Back</button>
          </div>
          </div>
      </div>
     </MainLayout>
     
  
  )
}
