import React from 'react'
import { Experience } from '../experience/Experience'
import style from './ProfessionalExperiencesList.module.css'
import { useResumeContent } from '../../context/ResumeDataContext'

export const ProfessionalExperiencesList:React.FC = () => {
  const { professionalExperience } = useResumeContent()

  if (professionalExperience?.length === 0) 
    return null
  return (
    <div className={style.professionalExperienceContainer}>
      <label className={style.title}>Professional Experience</label>
      <ul className={style.ul}>
        {professionalExperience 
          && professionalExperience.map( (experience,index) => {
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
