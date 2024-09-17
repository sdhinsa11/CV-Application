import { useState } from 'react'

import './experience.css'

function ExperienceSection() {
    return (
        <>
            <form className="experience">
                
                <div className='top-part'>
                    <h2 className='header'>Experience</h2>
                    <button className="expand">+</button>
                </div>
                <label htmlFor="companyName">Company Name</label>
                <br />
                <input type="text" id="companyName" name="companyName" placeholder="" />
                <br />
                <label htmlFor="positionT">Position Title:</label>
                <br />
                <input type="text" id="pTitle" name="pTitle" placeholder="BSc in Computer Science"/>
                <br />
                <label htmlFor="location">Location:</label>
                <br />
                <input type="text" id="location" name="location" placeholder="Edmonton, AB"/>
                <br />
                <label htmlFor="time">Start Date:</label>
                <br />
                <input type="date" id="startDate" name="startDate" />
                <label htmlFor="time">End Date:</label>
                <br />
                <input type="date" id="endDate" name="endDate" />

                <label htmlFor="roleRespons">Role Responsibilities:</label>
                <br />
                <input type="text" id="roleR" name="rolR" />
                
            </form>
        </>
        
      )
    
 
}

export default ExperienceSection