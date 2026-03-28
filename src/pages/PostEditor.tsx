import { useChanel } from "@bangcao2020/reactsync";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function PostEditor(props: any) {
  const [newPost, ] = useChanel("newPost", {title:"", body:""}, props);
  const [, setSelectedPost] = useChanel("selectedPost", "", props);
  const [posts, setPosts] = useChanel("posts", [], props);
  const [, setActiveMenu] = useChanel("activeMenu", "", props);
  
  const navigate = useNavigate();
  const onSaveBtnClick = () => {
        
        newPost.id = posts.length;
        const post = {...newPost}
        posts.push(post);
        setPosts(posts);
        setSelectedPost(newPost);
        setActiveMenu("posts");
        navigate("/postdetail");
        
  };

  const onTitleChanged = (event: any)=>{
         const newTitle = event.target.value;
         
         newPost.title = newTitle;
         console.log(newPost);
  }
  const onBodyChanged = (event: any)=>{
         const newBody = event.target.value;
         newPost.body = newBody;
          console.log(newPost);
  }
  return (
      <MainLayout>
      <div className="row mt-3">
       
      <h4 className="row">Add new post</h4>
      
      </div>
      
       <div className="row mt-3">
          
          Title
       
      </div>
      
      
      <div className="row ">
      <input type="text" id="postTitle" onChange={onTitleChanged}></input>
      </div>
       <div className="row mt-3">
       Body
       </div>
      <div className="row">
     
      <textarea id="postBody" onChange={onBodyChanged}></textarea>
      </div>
      <div className="row">
       <div className="col-1">
      <button className="rounded-1 bg-primary text-light m-2" onClick={onSaveBtnClick}>Save</button>
      </div>
      </div>
     </MainLayout>
     
  
  )
}
