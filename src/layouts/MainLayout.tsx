import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { MenuBar } from "../components/MenuBar";
export default function MainLayout(props: any) {

  return (
    <>
    <Header></Header>
     <main className="flex-fill container py-4">
      <MenuBar></MenuBar>
      {props.children}
      
      </main>
    <Footer></Footer>
     
    </>
  )
}
