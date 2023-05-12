

import "./Navbar.css";
import {Link} from 'react-router-dom'
export const Navbar=() =>{
    return(
        <div>

            <nav>
            <ul class="container">
               
                    <div class="container-logo">

                        
                     <h2><span>  logo </span> comidas </h2>
                    </div>


                    <ul class="links">   
            
                    <li class="link">  <a> <Link   to="/">Inicio</Link> </a> </li>
                    
                    
                       <li class="link"> <a><Link class="link" to="/Empresa">Carne</Link> </a></li> 
                    
                
                       <li class="link"> <a> <Link class="link" to="/Contacto">Hamburguesa</Link></a></li> 
                    
                    
                       <li class="link"> <a><Link  class="link"  to="/Conocenos">Bebidas</Link></a></li> 

                   
                     
                    </ul>

                    <div class="toggle">
                        |||
                    </div>
            </ul>
            </nav>
        </div>
    )
}   