import React from 'react'
import { Experience } from '../experience/Experience'
import style from './InternshipsExperienceList.module.css'

interface InternshipsExperencie {
  role?: string;
  company?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
  description?: string;
}
interface Props {
  internshipsExperience?: InternshipsExperencie[];
}

export const InternshipsExperienceList:React.FC<Props> = ({internshipsExperience}) => {
  return (
    <div className={style.internshipsExperienceContainer}>
      <label className={style.title}>Internships</label>
      <ul>
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
