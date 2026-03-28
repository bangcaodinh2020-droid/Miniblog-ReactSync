import { useNavigate } from "react-router-dom";
import { useChanel } from "@bangcao2020/reactsync";
export const PostItem = (props: any) => {
  const [selectedPost, setSelectedPost] = useChanel("selectedPost", "", props);
 const navigate = useNavigate();

  const onMoreBtnClick = (id:string) => {
     
     setSelectedPost(props.post);
     navigate("/postdetail");
     
  };

  return (
    <div className="row m-2 rounded-1 border border-primary p-2">
      <div className="row">{props.post.title}</div>
       <div className="row">{props.post.body}</div>
         <div className="row">
       <div className="col-1">
        <button className="rounded-1 bg-primary text-light" onClick={()=>onMoreBtnClick(props.post.id)}>More</button>
        </div>
        </div>
    </div>
  );
};