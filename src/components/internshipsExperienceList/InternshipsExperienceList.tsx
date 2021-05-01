import React from 'react'
import { Experience } from '../experience/Experience'
import style from './InternshipsExperienceList.module.css'
import { useResumeContent } from '../../context/ResumeDataContext'


export const InternshipsExperienceList:React.FC = () => {
  const { internshipsExperience } = useResumeContent()
  if (internshipsExperience?.length === 0)
    return null
  return (
    <div className={style.internshipsExperienceContainer}>
      <label className={style.title}>Internships</label>
      <ul className={style.ul}>
        {internshipsExperience 
          && internshipsExperience.map( (experience,index) => {
            return <Experience
                    key={index}
                    role={experience.role}
                    company={experience.company}
                    location={experience.location}
                    fechaInicio={experience.fechaInicio}
                    fechaFinal={experience.fechaFinal}
                    description={experience.description}
                  />
          })}
      </ul>
    </div>
  )
}
