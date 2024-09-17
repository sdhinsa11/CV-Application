import { useState } from 'react'

import './education.css'

function EducationSection() {
    return (
        <>
            <form className="education">
                <div className='top-part'>
                    <h2 className='header'>Education</h2>
                    <button className="expand">+</button>
                </div>
                <label htmlFor="schoolN">School Name</label>
                <br />
                <input type="text" id="schoolName" name="schoolName" placeholder="" />
                <br />
                <label htmlFor="degreeT">Degree Title:</label>
                <br />
                <input type="text" id="dTitle" name="dTitle" placeholder="BSc in Computer Science"/>
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
            </form>
        </>
        
      )
    
 
}

export default EducationSection