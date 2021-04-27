import React from 'react';
import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { Skills } from './components/skillsList/SkillsList';
import avatar from './img/avatar-default.svg'
const resumeContent = {
  personalInformation: {
    name: "Abdiel Zamudio",
    title: "Information Technology Engineer",
    city: "Mazatlán",
    state: "Sinaloa",
    country: "México",
    github: "https://github.com/eliuabdiel",
    linkedin: "https://www.linkedin.com/in/abdiel-zamudio/",
    number: 6692215558,
    email: "eliu_070@hotmail.com"
  },
  HeaderBackgroundColor: "#ffcdd2",
  profileUrlImg: avatar
}

const App: React.FC = () => {
  return (
    <>
    <Header
      personalInformation={
        resumeContent.personalInformation
      }
      backgroundColor={resumeContent.HeaderBackgroundColor}
      imgUrl={resumeContent.profileUrlImg}
    />
    <Body>
      <Skills></Skills>
    </Body>
    </>
  )
}

export default App;
