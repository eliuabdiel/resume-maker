import React from 'react'
import style from './ProfileDescription.module.css'
import { useResumeContent } from '../../context/ResumeDataContext'


export const ProfileDescription:React.FC = () => {
  const { profileDescription } = useResumeContent();

  if (!profileDescription)
    return null
    
  return (
    <div className={style.profileDescriptionContainer}>
      <label className={style.title}>Profile</label>
      {profileDescription && <div className={style.description}
        dangerouslySetInnerHTML={{__html: profileDescription}}
      />}
    </div>
    
  )
}
