import React from 'react'
import style from './ProfileDescription.module.css'
interface Props {
  profileDescription?: string;
}

export const ProfileDescription:React.FC<Props> = ({profileDescription}) => {
  return (
    <div className={style.profileDescriptionContainer}>
      <label className={style.title}>Profile</label>
      {profileDescription && <div className={style.description}
        dangerouslySetInnerHTML={{__html: profileDescription}}
      />}
    </div>
    
  )
}
