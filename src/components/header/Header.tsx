import React from 'react'
import { useResumeContent } from '../../context/ResumeDataContext';
import style from './Header.module.css';


export const Header: React.FC = () => {
  const { personalInformation, profileUrlImg, headerBackgroundColor } = useResumeContent()
  
  return (
    <div className={style.header} style={{backgroundColor: headerBackgroundColor || '#d6fbfa'}}>
        <div className={style.imgContainer}>
          <img src={profileUrlImg} className={style.img} alt={personalInformation?.name}></img>
        </div>
        <div className={style.infoContainer}>
          <label className={style.name}>{personalInformation?.name}</label>
          <label className={style.title}>{personalInformation?.title}</label>
          <label className={style.location}>
            {(
              personalInformation?.city +', '+
              personalInformation?.state +', '+
              personalInformation?.country
            )}
          </label>
          <div className={style.links}>
            {(
              personalInformation?.github && 
                <a 
                  className={style.link} 
                  href={personalInformation?.github}
                >A
                  GitHub
                </a>
              
            )}
            
            {(
              personalInformation?.linkedin && 
                <a 
                  className={style.link} 
                  href={personalInformation?.linkedin}
                >
                  Linkedin
                </a>
            )}
          </div>
          <div className={style.contact}>
            <label>{personalInformation?.number}</label>
            <a 
              className={style.link} 
              href={"mailto:"+personalInformation?.email}
            >
              {personalInformation?.email}
            </a>
          </div>
        </div>
    </div>
  )
}
