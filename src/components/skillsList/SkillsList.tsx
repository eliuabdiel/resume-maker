import React from 'react'
import { useResumeContent } from '../../context/ResumeDataContext'
import { Skill } from '../skill/Skill'
import style from './SkillsList.module.css'

interface Skills {
  name?: string;
  level?: number;
}

export const SkillsList:React.FC = () => {
  const { skills, languages, skillsLevelColor, showSkillLevel} = useResumeContent()
  if (showSkillLevel)
    return (
      <div className={style.skills}>
        {skills && <label className={style.title}>Skills</label>}
        {skills &&
          skills.map( (skill: Skills, index: number) => {
            return (<Skill
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color={skillsLevelColor}
                    />)
          }
        )}
        {languages && <label className={style.title} style={{marginTop: "2rem"}}>Languages</label>}
        {languages && 
          languages.map( (skill: Skills, index: number) => {
            return (<Skill
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color={skillsLevelColor}
                    />)
        })}
        
      </div>
    )
  return (
    <div className={style.skills}>
      {skills && <label className={style.title}>Skills</label>}
      {skills &&
        skills.map( (skill: Skills, index: number) => {
          return (<Skill
                    key={index}
                    name={skill.name}
                  />)
        }
        )}
        {languages && <label className={style.title} style={{marginTop: "2rem"}}>Languages</label>}
        {languages && 
          languages.map( (skill: Skills, index: number) => {
            return (<Skill
                      key={index}
                      name={skill.name}
                      level={skill.level}
                      color={skillsLevelColor}
                    />)
        })}
    </div>
  )
  
  
}
