import React from 'react'
import { Skill } from '../skill/Skill'
import style from './SkillsList.module.css'

interface Skills {
  name?: string;
  level?: number;
}

interface Props {
  skills?: Skills[];
  color?: string;
  showSkillLevel?: boolean;
}

export const SkillsList:React.FC<Props> = ({skills,color,showSkillLevel}) => {
  console.log(skills)
  if (showSkillLevel)
    return (
      <div className={style.skills}>
       {skills &&
          skills.map( skill => {
            return (<Skill
                      name={skill.name}
                      level={skill.level}
                      color={color}
                    />)
          }
        )}
      </div>
    )
  return (
    <div className={style.skills}>
      {skills &&
        skills.map( skill => {
          return (<Skill
                    name={skill.name}
                  />)
        }
        )}
    </div>
  )
  
  
}
