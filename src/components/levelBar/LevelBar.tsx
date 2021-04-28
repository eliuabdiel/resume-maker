import React from 'react'
import style from './LevelBar.module.css'

interface Props {
  level?: number;
  color?: string;
}
export const LevelBar:React.FC<Props> = ({level, color}) => {
  return (
    <div className={style.totalBar}>
      <div className={style.skillLevel} style={{backgroundColor: color, width: level+"%"}}>
      </div>
    </div>
  )
}
