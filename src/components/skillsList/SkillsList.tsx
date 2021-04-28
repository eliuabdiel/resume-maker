import React from 'react'
import { Skill } from '../skill/Skill'
import style from './SkillsList.module.css'

interface Skills {
  name?: string;
  level?: number;
}

interface Languages {
  name?: string;
  level?: number;
}

interface Props {
  skills?: Skills[];
  languages?: Languages[];
  color?: string;
  showSkillLevel?: boolean;
}

export const SkillsList:React.FC<Props> = ({skills, color, languages, showSkillLevel}) => {
  if (showSkillLevel)
    return (
      <div className={style.skills}>
        <label className={style.title}>Skills</label>
        {skills &&
          skills.map( (skill,index) => {
            return (<Skill
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color={color}
                    />)
          }
        )}
        {languages && <label className={style.title} style={{marginTop: "2rem"}}>Languages</label>}
        {languages && languages.map( (skill,index) => {
            return (<Skill
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color={color}
                    />)
        })}
        
      </div>
    )
  return (
    <div className={style.skills}>
      <label className={style.title}>Skills</label>
      {skills &&
        skills.map( skill => {
          return (<Skill
                    name={skill.name}
                  />)
        }
        )}
        {languages && <label className={style.title} style={{marginTop: "2rem"}}>Languages</label>}
        {languages && languages.map( skill => {
            return (<Skill
                      name={skill.name}
                      level={skill.level}
                      color={color}
                    />)
        })}
    </div>
  )
  
  
}
