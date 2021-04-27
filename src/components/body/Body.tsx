import React from 'react'
import style from './Body.module.css'

export const Body: React.FC<{}> = ({children}) => {
  return (
    <div className={style.body}>
      {children}
    </div>
  )
}
