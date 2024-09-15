import PersonalSection from './Personal.jsx'
import Resume from './Resume.jsx'
import './index.css'
import './allC.css'
import EducationSection from './education.jsx'
import ExperienceSection from './experience.jsx'


function AllC() {
    return (
        <div className='container'>

            <div className="sections">
                <PersonalSection />
                <EducationSection />
                <ExperienceSection />
            </div>
            <Resume />
       
        </div>
        
      )
}

export default AllC