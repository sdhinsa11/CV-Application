import './Resume.css'

function Resume({name, email, pN, school, dT, loc, sT, eT, experiences}) {
    return (
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
                <h2>Education</h2>
                <hr />
                <div className='eduInfo'>
                    <div className="lineOne">
                        <p className='sch'>{school}</p>
                        <p>{loc}</p>
                    </div>

                    <div className="lineTwo">
                        <p>{sT} - {eT}</p>
                        <p>{dT}</p>
                    </div>
                </div>
            </div>

{/*  dynamically add it */}
            <div className="exper">
                <h2>Experience</h2>
                <hr />
                {experiences.map((experience, index) => (
                    <div className="exp" key={index}>
                        <div className="lineOne">
                            <p>{experience.workName}</p>
                            <p>{experience.locW}</p>
                        </div>
                        <div className="lineTwo">
                            <p>{experience.stimeW} - {experience.etimeW}</p>
                            <p>{experience.pT}</p>
                        </div>
                        <ul>
                            {experience.roleR.split(',').map((role, idx) => (
                                <li key={idx}>{role.trim()}</li>
                            ))}
                        </ul>
                    </div>
                ))}   
            </div>
        </div>
    );
}

export default Resume

