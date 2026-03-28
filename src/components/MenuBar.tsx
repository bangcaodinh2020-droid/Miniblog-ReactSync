import { useChanel } from "@bangcao2020/reactsync";
import { useNavigate } from "react-router-dom";
export const MenuBar = (props: any) => {
  const [activeMenu, setActiveMenu] = useChanel("activeMenu", "", props);
  const navigate = useNavigate();
  const onBtnClick = (item:string) => {
       setActiveMenu(item);
       navigate("/"+ item);
  };

  return (
    <div className="row">
      
      
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={(activeMenu =="")? "nav-item bg-primary rounded-1 text-light m-2 p-2" : "nav-item m-2 p-2"} onClick={()=>onBtnClick("")}>
                Home
              </li>
              <li className={(activeMenu =="posts")? "nav-item bg-primary rounded-1 text-light m-2 p-2" : "nav-item m-2 p-2"}  onClick={()=>onBtnClick("posts")}>
                Posts
              </li>
              <li className={(activeMenu =="edit")? "nav-item bg-primary rounded-1 text-light m-2 p-2" : "nav-item m-2 p-2"}  onClick={()=>onBtnClick("edit")}>
                New Post
              </li>
              
            </ul>
          </div>
        </div>
</nav>
    </div>
  );
};