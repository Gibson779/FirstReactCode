import {createRoot} from "react-dom/client"
const root = createRoot(document.getElementById("Root"))

function MyList(){
  return(
    <ol>
      <li>
        My is is looking good now
      </li>
    </ol>
  )
}

root.render(
  <MyList />
)
