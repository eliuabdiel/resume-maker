import React from 'react'
import style from './SkillsList.module.css'

interface Skill {
  name?: string;
  level?: number;
}

interface Props {
  skills?: Skill;
  color?: string;
  showSkillLevel?: boolean;
}

export const Skills:React.FC<Props> = ({skills,color,showSkillLevel}) => {
  
  if (showSkillLevel)
    return (
      <div className={style.skills}>
       si
      </div>
    )
  return (
    <div className={style.skills}>
      no
    </div>
  )
  
  
}
