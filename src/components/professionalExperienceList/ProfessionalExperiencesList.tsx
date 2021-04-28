import React from 'react'
import { Experience } from '../experience/Experience'
import style from './ProfessionalExperiencesList.module.css'
interface ProfessinalExperiences {
  role?: string;
  company?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
  description?: string;
}
interface Props {
  professionalExperiences?: ProfessinalExperiences[];
}

export const ProfessionalExperiencesList:React.FC<Props> = ({
  professionalExperiences
}) => {
  return (
    <div className={style.professionalExperienceContainer}>
      <label className={style.title}>Professional Experience</label>
      <ul className={style.ul}>
        {professionalExperiences 
          && professionalExperiences.map( (experience,index) => {
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
