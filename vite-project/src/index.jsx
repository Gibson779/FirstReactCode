import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))


function Header(){
  return(
   <header>
         <img src="React-icon.png" alt="React Logo" width="40px"/>
         <nav >
          <ul className = "nav-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
         </nav>
      </header>
  )
}

function Footer () {
return(
  <footer>
        <small>
           © copyright 2024 Gibson developer. All rights reserved.
        </small>
      </footer>
  ) 
}

function Main (){
  return(
<main>
      <h1>My Shopping List </h1>
    <ol>
          <li> Bread </li>
          <li> Milk </li>
          <li> eggs </li>
          <li> fruit  </li>
       </ol>
    </main>
  )
}

function Page(){
  return(
    <>
    <Header/>
    <Footer/>
    <Main/>
    </>
  )
}
  

root.render(
  < Page />
)
