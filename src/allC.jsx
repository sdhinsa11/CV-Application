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

    // const [workName, setWN] = useState("");
    // const [pT, setPT] = useState("");
    // const [stimeW, setsTimeW] = useState("");
    // const [etimeW, seteTimeW] = useState("");
    // const [locW, setLocW] = useState("");
    // const [roleR, setrR] = useState("");

    // State for multiple experiences
    const [experiences, setExperiences] = useState([
    { workName: '', pT: '', stimeW: '', etimeW: '', locW: '', roleR: '' }
    ]);

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const newExperiences = [...experiences];
        newExperiences[index][name] = value;
        setExperiences(newExperiences);
      };

    // Add a new empty experience form
    const handleAddExperience = () => {
        setExperiences([
            ...experiences,
            { workName: '', pT: '', stimeW: '', etimeW: '', locW: '', roleR: '' }
        ]);
    };
    
    const handleRemoveExperience = (index) => {
        const newExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(newExperiences);
      };


    
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


    // function handleWN(e){
    //     setWN(e.target.value);
    // }

    // function handlepT(e){
    //     setPT(e.target.value);
    // }

    // function handlesTimeW(e){
    //     setsTimeW(e.target.value);
    // }

    // function handleeTimeW(e){
    //     seteTimeW(e.target.value);
    // }

    // function handleLocW(e){
    //     setLocW(e.target.value);
    // }

    // function handlerR(e){
    //     setrR(e.target.value);
    // }




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
                {/* <ExperienceSection workName = {workName}
                                    pT = {pT}
                                    stimeW = {stimeW}
                                    etimeW={etimeW}
                                    loc={locW}
                                    roleR={roleR}
                                    
                                    handleWN = {handleWN}
                                    handlepT = {handlepT}
                                    handlesTimeW= {handlesTimeW}
                                    handleeTimeW={handleeTimeW}
                                    handleLoc={handleLocW}
                                    handleroleR ={handlerR}/> */}
                
                {experiences.map((experience, index) => (
                    <ExperienceSection
                        key={index}
                        workName={experience.workName}
                        pT={experience.pT}
                        stimeW={experience.stimeW}
                        etimeW={experience.etimeW}
                        loc={experience.locW}
                        roleR={experience.roleR}
                        handleWN={(e) => handleExperienceChange(index, e)}
                        handlepT={(e) => handleExperienceChange(index, e)}
                        handlesTimeW={(e) => handleExperienceChange(index, e)}
                        handleeTimeW={(e) => handleExperienceChange(index, e)}
                        handleLoc={(e) => handleExperienceChange(index, e)}
                        handleroleR={(e) => handleExperienceChange(index, e)}
                    />
                ))}
                <button type="button" onClick={handleAddExperience}>
                        Add Experience
                </button>
                <button type="button" onClick={handleRemoveExperience}>
                    Delete Experience
                </button>
            </div>
            <Resume 
                name={name}
                email={email} 
                pN = {phoneNumber} 
                school={schoolName} 
                dT={degreeT} 
                loc={loc}
                sT={stime} 
                eT={etime} 
                experiences={experiences}  
            />
       
        </div>
    );
}
  
export default AllC


