import { useState } from 'react'

import './Personal.css'

function PersonalSection() {
    return (
        <>
            <form className="personal">
                <h2>Personal Information</h2>
                <label htmlFor="fname">Name:</label>
                <br />
                <input type="text" id="fname" name="fname" placeholder="Sohana Dhinsa" />
                <br />
                <label htmlFor="lname">Email:</label>
                <br />
                <input pattern="^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$" type="email" id="email" name="email" placeholder="sohana@email.com"/>
                <br />
                <label htmlFor="lname">Phone Number:</label>
                <br />
                <input pattern="regex(.,‘^[0-9]{9,10}$’)" type="tel" id="phoneNumber" name="phoneNumber" placeholder="123-456-789"/>
            </form>
        </>
        
      )
    
 
}

export default PersonalSection
