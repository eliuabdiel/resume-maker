import React from 'react'
import style from './ProfessionalBackground.module.css'

interface Education {
  degree?: string;
  institution?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
}

interface ProfessionalExperience {
  role?: string;
  company?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
  description?: string;
}

interface InternshipsExperencie {
  role?: string;
  company?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
  description?: string;
}
interface Props {
  profileDescription?: string;
  education?: Education[];
  professionalExperience?: ProfessionalExperience[];
  internshipsExperience?: InternshipsExperencie[];
}

export const ProfessionalBackground:React.FC<Props> = ({
  profileDescription,
  education,
  professionalExperience,
  internshipsExperience,

}) => {
  return (
    <div className={style.backgroundContainer}>
      
    </div>
  )
}
