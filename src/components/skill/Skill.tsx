import React from 'react'
interface Props {
  name?:string;
  level?:number;
}

export const Skill:React.FC<Props> = ({name, level}) => {
  return (
    <div>
      <h6>{ name }</h6>
      <h6>{ level }</h6>
    </div>
  )
}
