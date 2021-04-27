import React from 'react'
import style from './Header.module.css';
import avatar from '../../img/avatar-default.svg'


interface PersonalInformation {
  name?: string;
  city?: string;
  state?: string;
  country?: string;
  number?: number;
  email?: string;
  title?: string;
  github?: string;
  linkedin?: string;

}
interface Props {
  personalInformation: PersonalInformation;
  imgUrl?: string;
  backgroundColor?: string;
}

export const Header: React.FC<Props> = (props: Props) => {
  return (
    <div className={style.header} style={{backgroundColor: props.backgroundColor || '#d6fbfa'}}>
        <div className={style.imgContainer}>
          <img src={props.imgUrl || avatar} className={style.img} alt={props.personalInformation.name}></img>
        </div>
        <div className={style.infoContainer}>
          <h1 className={style.name}>{props.personalInformation.name}</h1>
          <h2 className={style.title}>{props.personalInformation.title}</h2>
          <div className={style.links}>
            {(
              props.personalInformation.github && 
                <a 
                  className={style.link} 
                  href={props.personalInformation.github}
                >
                  GitHub
                </a>
              
            )}
            &nbsp; 
            {(
              props.personalInformation.linkedin && 
                <a 
                  className={style.link} 
                  href={props.personalInformation.linkedin}
                >
                  Linkedin
                </a>
            )}
          </div>
          <div className={style.contact}>
            {props.personalInformation.number}
          </div>
        </div>
    </div>
  )
}
