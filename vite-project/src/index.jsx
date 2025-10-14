import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))
import '../src/app.css';
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"



function Page(){
  return(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}
  

root.render(
  < Page />
)
