//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {BaseApp, Test3, Test4, Test5, Test6} from "@bangcao2020/reactsync";
import Posts from './pages/Posts';
import { MenuBar } from './components/MenuBar';
//import type {BaseProps} from "base-component";

export function App() {

  return (
    <>
    <div>
   
     <Test3 chanel={"count"} defaultValue={5}> A </Test3>
     <Test3 chanel={"count"} defaultValue={60}> B </Test3>
     <Test4 > C </Test4>
     <Test4 > D </Test4>
     
   </div>
     
    </>
  )
}



export  class TestApp extends BaseApp {
  
  render(){
  return (
    
   <div>
    
    <Test3 chanel={"count"} defaultValue={5}> A </Test3>
    <Test3 chanel={"count"} defaultValue={60}> B </Test3>
     <Test4 > C </Test4>
     <Test4 > D </Test4>
     <Test5 id='E' data={{syncers:["F"]}}> E</Test5>
     <Test5 id='F' data={{syncers:["E"]}}> F</Test5>
     <Test6 id='k' data={{syncers:["l"]}}> K</Test6>
     <Test6 id='l' data={{syncers:["k"]}}> L</Test6>
     
   </div>
    
  );
}
}

export  class MiniBlog extends BaseApp {
  
  render(){
  return (
    
   <>

   </>
    
  );
}
}

//export default App
