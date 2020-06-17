import React from 'react';



const Contact=()=>{
    return(
        <div className='content'>
            <h2>Contact US</h2>
            <form>
                <label>Your Name :</label>
                <input type="text" name='name' />
                <label>Your email :</label>
                <input type='email' name='email' />
                <label> Your message :</label>
                <textarea rows='5' ></textarea>
                <button>send</button>
            </form>
        </div>
        
            
    );
}

export default Contact;