import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function ShoppingList(){
  return(
    <div>
      <header>
         <img src="React-icon.png" alt="React Logo" width="40px"/>
      </header>
      <main>
      <h1>My Shopping List </h1>
    <ol>
          <li> Bread </li>
          <li> Milk </li>
          <li> eggs </li>
          <li> fruit </li>
       </ol>
    </main>
    <footer>
        <small>
           © copyright 2024 Gibson developer. All rights reserved.
        </small>
      </footer>
    </div>

    
  )
}
root.render(
  < ShoppingList />
)
