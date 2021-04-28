import React from 'react';
import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { SkillsList } from './components/skillsList/SkillsList';
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
    number: "6692215558",
    email: "eliu_070@hotmail.com"
  },
  HeaderBackgroundColor: "#ffcdd2",
  profileUrlImg: avatar,
  skills: [
    {
      name: "JavaScript",
      level: 90,
    },
    {
      name: "React JS",
      level: 80,
    },
    {
      name: "HTML, CSS",
      level: 80,
    },
    {
      name: "Java",
      level: 70,
    },
    {
      name: "Spring Boot",
      level: 60,
    },
    {
      name: "MongoDB",
      level: 60,
    },
    {
      name: "MySQL",
      level: 60,
    },
    {
      name: "Git, GitHub",
      level: 70,
    }
  ],
  languages: [
    {
      name: "English",
      level: 70,
    },
    {
      name: "Spanish",
      level: 100,
    },
  ],
  skillsLevelColor: "#000000",
  showSkillLevel: true,
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
      <SkillsList
        skills={resumeContent.skills}
        languages={resumeContent.languages}
        color={resumeContent.skillsLevelColor}
        showSkillLevel={false}
      />
      
    </Body>
    </>
  )
}

export default App;
