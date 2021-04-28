import React from 'react';
import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { ProfessionalBackground } from './components/professionalBackground/ProfessionalBackground';
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
  education: [
    {
      degree: "Information Technology Engineer",
      institution: "Polytechnic University of Sinaloa",
      location: "Mazatlán, Sinaloa, México",
      fechaInicio: "August 2018",
      fechaFinal: "December 2021",
    },
  ],
  profileDescription: `<strong>Developer</strong> experienced on <strong>Web Technologies</strong> that cares about the product and
  is always open to new technologies and roles. <strong>Team player</strong> that is a preacher of
  <strong>communication</strong>, <strong>patience</strong> and <strong>humility</strong>. And a <strong>Friend</strong> that is always available to
  <strong>share knowledge</strong> and an ear.`,
  professionalExperience: [],
  internshipsExperience: [
    {
      role: "Project Lead",
      company: "Polytechnic University of Sinaloa",
      location: "Mazatlán",
      fechaInicio: "August 2018",
      fechaFinal: "December 2021",
      description: `Leading and developing a Web Application to improve the internship
      process that will impact the way that university staff and also students
      go through this process. Implementing RESTful services with Spring Boot
      (Java), a Single Page Application with React JS (JavaScript), and MongoDB
      as our database`,
    },
    {
      role: "Project Lead",
      company: "Polytechnic University of Sinaloa",
      location: "Mazatlán",
      fechaInicio: "August 2018",
      fechaFinal: "December 2021",
      description: `<strong>Leading</strong> and developing a Web Application to improve the internship
      process that will impact the way that university staff and also students
      go through this process. Implementing RESTful services with Spring Boot
      (Java), a Single Page Application with React JS (JavaScript), and MongoDB
      as our database`,
    },
    {
      role: "Project Lead",
      company: "Polytechnic University of Sinaloa",
      location: "Mazatlán",
      fechaInicio: "August 2018",
      fechaFinal: "December 2021",
      description: `Leading and developing a Web Application to improve the internship
      process that will impact the way that university staff and also students
      go through this process. Implementing RESTful services with Spring Boot
      (Java), a Single Page Application with React JS (JavaScript), and MongoDB
      as our database`,
    },
  ],
  
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
        showSkillLevel={resumeContent.showSkillLevel}
      />
      <ProfessionalBackground
        profileDescription={resumeContent.profileDescription}
        education={resumeContent.education}
        professionalExperiences={resumeContent.professionalExperience}
        internshipsExperience={resumeContent.internshipsExperience}
      />
    </Body>
    </>
  )
}

export default App;
