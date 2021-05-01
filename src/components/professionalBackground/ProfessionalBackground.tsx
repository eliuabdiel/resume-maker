import React from 'react'
import { EducationList } from '../educationList/EducationList'
import { InternshipsExperienceList } from '../internshipsExperienceList/InternshipsExperienceList'
import { ProfessionalExperiencesList } from '../professionalExperienceList/ProfessionalExperiencesList'
import { ProfileDescription } from '../profileDescription/ProfileDescription'
import style from './ProfessionalBackground.module.css'

export const ProfessionalBackground:React.FC = () => {
  return (
    <div className={style.backgroundContainer}>
      <ProfileDescription />
      <EducationList />
      <ProfessionalExperiencesList />
      <InternshipsExperienceList />
    </div>
  )
}
