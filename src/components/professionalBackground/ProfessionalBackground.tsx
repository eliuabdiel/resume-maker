import React from 'react'
import { EducationList } from '../educationList/EducationList'
import { InternshipsExperienceList } from '../internshipsExperienceList/InternshipsExperienceList'
import { ProfessionalExperiencesList } from '../professionalExperienceList/ProfessionalExperiencesList'
import { ProfileDescription } from '../profileDescription/ProfileDescription'
import style from './ProfessionalBackground.module.css'

interface Education {
  degree?: string;
  institution?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
}

interface ProfessionalExperiences {
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
  professionalExperiences?: ProfessionalExperiences[];
  internshipsExperience?: InternshipsExperencie[];
}

export const ProfessionalBackground:React.FC<Props> = ({
  profileDescription,
  education,
  professionalExperiences,
  internshipsExperience,

}) => {
  return (
    <div className={style.backgroundContainer}>
      { profileDescription && 
          <ProfileDescription 
            profileDescription={profileDescription}
          />
      }
      { education && 
        <EducationList
          education={education}
        />
      }
      {professionalExperiences && 
        <ProfessionalExperiencesList 
          professionalExperiences={professionalExperiences} 
        />}
      {internshipsExperience && 
        <InternshipsExperienceList 
          internshipsExperience={internshipsExperience}
        />
      }
      
      
    </div>
  )
}
