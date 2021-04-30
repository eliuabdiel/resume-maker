import React from 'react'
import style from './Header.module.css';


interface PersonalInformation {
  name?: string;
  city?: string;
  state?: string;
  country?: string;
  number?: string;
  email?: string;
  title?: string;
  github?: string;
  linkedin?: string;

}
interface Props {
  personalInformation?: PersonalInformation;
  imgUrl?: string;
  backgroundColor?: string;
}

export const Header: React.FC<Props> = (props) => {
  return (
    <div className={style.header} style={{backgroundColor: props.backgroundColor || '#d6fbfa'}}>
        <div className={style.imgContainer}>
          <img src={props.imgUrl} className={style.img} alt={props.personalInformation?.name}></img>
        </div>
        <div className={style.infoContainer}>
          <label className={style.name}>{props.personalInformation?.name}</label>
          <label className={style.title}>{props.personalInformation?.title}</label>
          <label className={style.location}>
            {(
              props.personalInformation?.city +', '+
              props.personalInformation?.state +', '+
              props.personalInformation?.country
            )}
          </label>
          <div className={style.links}>
            {(
              props.personalInformation?.github && 
                <a 
                  className={style.link} 
                  href={props.personalInformation?.github}
                >
                  GitHub
                </a>
              
            )}
            
            {(
              props.personalInformation?.linkedin && 
                <a 
                  className={style.link} 
                  href={props.personalInformation?.linkedin}
                >
                  Linkedin
                </a>
            )}
          </div>
          <div className={style.contact}>
            <label>{props.personalInformation?.number}</label>
            <a 
              className={style.link} 
              href={"mailto:"+props.personalInformation?.email}
            >
              {props.personalInformation?.email}
            </a>
          </div>
        </div>
    </div>
  )
}
