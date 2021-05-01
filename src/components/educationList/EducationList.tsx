import React from 'react'
import { EducationCourse } from '../education/EducationCourse'
import style from './EducationList.module.css'
import { useResumeContent } from '../../context/ResumeDataContext'


export const EducationList:React.FC = () => {
  const { education } = useResumeContent()
  if (education?.length === 0) 
    return null
  return (
    <div className={style.educationContainer}>
      <label className={style.title}>Education</label>
      <ul className={style.ul}>
        {education && education.map(( course, index ) => {
          return <EducationCourse
                  key={index}
                  degree={course.degree}
                  institution={course.institution}
                  location={course.location}
                  fechaInicio={course.fechaInicio}
                  fechaFinal={course.fechaFinal}
                />
        })}
      </ul>
    </div>
  )
}
