import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))


function Header(){
  return(
   <header>
         <img src="React-icon.png" alt="React Logo" width="40px"/>
      </header>
  )
}

function Page(){
  return(
    <>
    <Header/>
      <main>
      <h1>My Shopping List </h1>
    <ol>
          <li> Bread </li>
          <li> Milk </li>
          <li> eggs </li>
          <li> fruit  </li>
       </ol>
    </main>
    <footer>
        <small>
           © copyright 2024 Gibson developer. All rights reserved.
        </small>
      </footer>
    </>

    
  )
}
root.render(
  < Page />
)
