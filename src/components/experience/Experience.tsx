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
  location,
  fechaInicio,
  fechaFinal,
  description
}) => {
  return (
    <li>
      <div className={style.experienceContainer}>
        <label className={style.titleExperience}>{role + " - " +company + " " + location}</label>
        <label className={style.dates}>{fechaInicio + " - " + fechaFinal}</label>
        <div className={style.description}>{description}</div>
      </div>
    </li>
  )
}
