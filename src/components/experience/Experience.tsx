import React from 'react'
import style from './Experience.module.css'

interface Props {
  role?: string;
  company?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
  description?: string;
}

export const Experience:React.FC<Props> = ({
  role,
  company,
  location = "",
  fechaInicio,
  fechaFinal = "Present",
  description
}) => {
  return (
    <li>
      <div className={style.experienceContainer}>
        <label className={style.titleExperience}>{role}</label>
        <label className={style.company}>{company + " , " + location}</label>
        <label className={style.dates}>{fechaInicio + " - " + fechaFinal}</label>
        { description && <div className={style.description} 
          dangerouslySetInnerHTML={{__html: description}}
          />}
      </div>
    </li>
  )
}
