import ReactIcon from "/Logo.jpeg"

export default function Navbar (){
  return(
    <header>
        <nav>
            <img src= {ReactIcon} alt= "React Logo"/>
            <span>Regan Gibson</span>
            <ul clasName ListItems>
               <li>Home</li>
               <li>About</li>
            </ul>
        </nav>
        
    </header>
  )
  }
