import React from 'react'
import style from './Skill.module.css'
interface Props {
  name?:string;
  level?:number;
  color?: string;
}

export const Skill:React.FC<Props> = ({name, level, color}) => {
  return (
    <div className={style.skillSet}>
      <label className={style.skillName}>{ name }</label>
      <div className={style.totalBar}>
      <div className={style.skillLevel}>

      </div>
      </div>
    </div>
  )
}
