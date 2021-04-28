import React from 'react'
import { EducationCourse } from '../education/EducationCourse'
import style from './EducationList.module.css'

interface Education {
  degree?: string;
  institution?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
}

interface Props {
  education?: Education[];
}

export const EducationList:React.FC<Props> = ({education}) => {
  return (
    <div className={style.educationContainer}>
      <label className={style.title}>Education</label>
      <ul>
        {education && education.map(( degree, index ) => {
          return <EducationCourse
                  key={index}
                  degree={degree.degree}
                  institution={degree.institution}
                  location={degree.location}
                  fechaInicio={degree.fechaInicio}
                  fechaFinal={degree.fechaFinal}
                />
        })}
      </ul>
    </div>
  )
}
