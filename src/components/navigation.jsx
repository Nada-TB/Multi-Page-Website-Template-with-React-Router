import React from 'react';
import { Link} from "react-router-dom";


const Navigation=()=>{
    return(
        <nav>
            <h1><Link className='navigation' to='/'>React multi pages website</Link></h1>
            <ul>
                <Link className='navigation' to='/'><li>Home</li></Link>
                <Link className='navigation' to='/about'><li>About</li></Link>
                <Link className='navigation' to='/contact'><li>Contact</li></Link>
            </ul>    
        </nav>
    );
}



export default Navigation;