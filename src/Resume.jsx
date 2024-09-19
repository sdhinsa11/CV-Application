import { useState } from 'react'

import './Resume.css'

function Resume({name, email, pN, school, dT, loc, sT, eT}) {
    return (
        <>
            <div className='Resume'>
                <div className='pers'>
                    <h2>{name}</h2>
                    <hr />
                    <div className='Information'>
                        <p className='email'>{email}</p>
                        <div className="verticalLine"></div>
                        <p>{pN}</p>
                    </div>
                </div>

                <div className='edu'>
                    <h2>{name}</h2>
                    <div className='eduInfo'>
                        <p className='sch'>{school}</p>
                        <p>{dT}</p>
                        <p>{sT}</p>
                        <p>{eT}</p>
                        <p>{loc}</p>
                    </div>
                </div>
            </div>


        </>
        
      )
    
 
}

export default Resume
