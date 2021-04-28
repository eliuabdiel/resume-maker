import React from 'react'
import style from './EducationCourse.module.css'
interface Props {
  degree?: string;
  institution?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
}

export const EducationCourse:React.FC<Props> = ({
  degree,
  institution,
  location,
  fechaInicio,
  fechaFinal
}) => {
  return (
    <li>
      <div className={style.educationContainer}>
        <label className={style.titleEducation}>{degree}</label>
        <label className={style.institution}>{institution}</label>
        <label className={style.dates}>{fechaInicio + " - " + fechaFinal}</label>
      </div>
    </li>
  )
}
