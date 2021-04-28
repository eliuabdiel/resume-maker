import React from 'react'
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
    <div>
      
    </div>
  )
}
