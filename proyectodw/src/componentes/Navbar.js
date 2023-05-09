

import "./Navbar.css";
import {Link} from 'react-router-dom'
export const Navbar=() =>{
    return(
        <div>

            <nav>
            <ul class="container">
               
                    <div class="container-logo">

                        
                     <h2><span>  logo </span> comidas <span>.</span></h2>
                    </div>


                    <ul class="links">   
            
                        <Link class="link" to="/">Inicio</Link>
                    
                    
                        <Link class="link" to="/Empresa">Carne</Link>
                    
                
                        <Link class="link" to="/Contacto">Hamburguesa</Link>
                    
                    
                        <Link  class="link"  to="/Conocenos">Bebidas</Link>
                    
                    </ul>

                    <div class="toggle">
                        |||
                    </div>
            </ul>
            </nav>
        </div>
    )
}   