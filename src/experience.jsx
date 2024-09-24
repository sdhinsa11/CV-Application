import { useState } from 'react'

import './experience.css'

function ExperienceSection({workName, pT, stimeW, etimeW, loc, roleR, handleWN, handlepT, handleLoc, handlesTimeW, handleeTimeW, handleroleR}) {
    return (
        <>
            <form className="experience">
                
                <div className='top-part'>
                    <h2 className='header'>Experience</h2>
                    <button className="expand">+</button>
                </div>
                <label htmlFor="companyName">Company Name</label>
                <br />
                <input type="text" id="companyName" name="workName" placeholder="Pinterest" value={workName} onChange={handleWN}/>
                <br />
                <label htmlFor="positionT">Position Title:</label>
                <br />
                <input type="text" id="pTitle" name="pT" placeholder="Software Engineer" value={pT} onChange={handlepT}/>
                <br />
                <label htmlFor="location">Location:</label>
                <br />
                <input type="text" id="location" name="locW" placeholder="Edmonton, AB" value={loc} onChange={handleLoc}/>
                <br />
                <label htmlFor="time">Start Date:</label>
                <br />
                <input type="date" id="startDate" name="stimeW"  value={stimeW} onChange={handlesTimeW}/>
                <label htmlFor="time">End Date:</label>
                <br />
                <input type="date" id="endDate" name="etimeW" value={etimeW} onChange={handleeTimeW}/>

                <label htmlFor="roleRespons">Role Responsibilities:</label>
                <br />
                <input type="text" id="roleR" name="roleR" value={roleR} onChange={handleroleR}/>
                
            </form>
        </>
        
      )
}
export default ExperienceSection