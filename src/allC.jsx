import { useState } from 'react'
import PersonalSection from './Personal.jsx'
import Resume from './Resume.jsx'
import './index.css'
import './allC.css'
import EducationSection from './education.jsx'
import ExperienceSection from './experience.jsx'


function AllC() {
    // This is the parent node - so this manages the state, use props for the section components and resume
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [schoolName, setSchool] = useState("");
    const [degreeT, setDegree] = useState("");
    const [stime, setsTime] = useState("");
    const [etime, seteTime] = useState("");
    const [loc, setLoc] = useState("");
    
    function handleName(e){
        setName(e.target.value);
    }

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePN(e){
        setPhoneNumber(e.target.value);
    }

    function handleSchool(e){
        setSchool(e.target.value);
    }

    function handleDegree(e){
        setDegree(e.target.value);
    }

    function handlesTime(e){
        setsTime(e.target.value);
    }

    function handleeTime(e){
        seteTime(e.target.value);
    }

    function handleLoc(e){
        setLoc(e.target.value);
    }



    return (
        <div className='container'>

            <div className="sections">
                <PersonalSection name= {name}
                                email = {email}
                                pN = {phoneNumber} 
                                handleName = {handleName}
                                handleEmail={handleEmail}
                                handlePN={handlePN}/>
                <EducationSection  sch = {schoolName}
                                    dT = {degreeT}
                                    stime = {stime}
                                    etime = {etime}
                                    loc = {loc}
                                    handleSch = {handleSchool}
                                    handleDT={handleDegree}
                                    handleLoc={handleLoc}
                                    handlesTime = {handlesTime}
                                    handleeTime = {handleeTime}/>
                <ExperienceSection />
            </div>
            <Resume name={name}
            email={email} pN = {phoneNumber} 
            school={schoolName} dT={degreeT} loc={loc}
            sT={stime} eT={etime}/>
       
        </div>
        
      )
}

export default AllC