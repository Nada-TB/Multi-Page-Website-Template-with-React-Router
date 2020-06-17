import React from 'react';
import { Link, withRouter } from "react-router-dom";


const Navigation=()=>{
    return(
        <nav>
            <h1><Link className='navigation' to='/mutlti-pages-react-website/'>React multi pages website</Link></h1>
            <ul>
                <Link className='navigation' to='/mutlti-pages-react-website/'><li>Home</li></Link>
                <Link className='navigation' to='mutlti-pages-react-website/about'><li>About</li></Link>
                <Link className='navigation' to='mutlti-pages-react-website/contact'><li>Contact</li></Link>
            </ul>    
        </nav>
    );
}



export default Navigation;