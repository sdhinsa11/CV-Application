import { useState } from 'react'

import './Personal.css'

function PersonalSection({name, handleName, email, handleEmail, pN,handlePN}) {

    return (
        <>
            <form className="personal">
                <div className='top-part'>
                    <h2 className='header'>Personal Information</h2>
                    <button className="expand">+</button>
                </div>
                <label htmlFor="fname">Name:</label>
                <br />
                <input type="text" id="fname" name="fname" placeholder="Sohana Dhinsa" value={name} onChange={handleName}/>
                <br />
                <label htmlFor="lname">Email:</label>
                <br />
                <input pattern="^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" type="email" id="email" name="email" placeholder="sohana@email.com" value={email} onChange={handleEmail}/>
                <br />
                <label htmlFor="lname">Phone Number:</label>
                <br />
                <input pattern="regex(.,‘^[0-9]{9,10}$’)" type="tel" id="phoneNumber" name="phoneNumber" placeholder="123-456-789" value={pN} onChange={handlePN}/>
            </form>
        </>
        
      )
    
 
}

export default PersonalSection
