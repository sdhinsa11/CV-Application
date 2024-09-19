import { useState } from 'react'

import './education.css'

function EducationSection({sch, dT, stime, etime, loc, handleSch, handleDT, handleLoc, handlesTime, handleeTime}) {
    return (
        <>
            <form className="education">
                <div className='top-part'>
                    <h2 className='header'>Education</h2>
                    <button className="expand">+</button>
                </div>
                <label htmlFor="schoolN">School Name</label>
                <br />
                <input type="text" id="schoolName" name="schoolName" placeholder="" value={sch} onChange={handleSch} />
                <br />
                <label htmlFor="degreeT">Degree Title:</label>
                <br />
                <input type="text" id="dTitle" name="dTitle" placeholder="BSc in Computer Science" value={dT} onChange={handleDT}/>
                <br />
                <label htmlFor="location">Location:</label>
                <br />
                <input type="text" id="location" name="location" placeholder="Edmonton, AB" value={loc} onChange={handleLoc}/>
                <br />
                <label htmlFor="time">Start Date:</label>
                <br />
                <input type="date" id="startDate" name="startDate" value={stime} onChange={handlesTime} />
                <label htmlFor="time">End Date:</label>
                <br />
                <input type="date" id="endDate" name="endDate"value={etime} onChange={handleeTime} />
            </form>
        </>
        
      )
    
 
}

export default EducationSection