import  { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import me from '../img/me_cv_photo.jpg'

interface PersonalInformation {
  name?: string;
  title?: string;
  city?: string;
  state?: string;
  country?: string;
  github?: string;
  linkedin?: string;
  number?: string;
  email?: string;
}
interface Skill {
  name?: string;
  level?: number;
}
interface Education {
  degree?: string;
  institution?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
}
interface Experience {
  role?: string;
  company?: string;
  location?: string;
  fechaInicio?: string;
  fechaFinal?: string;
  description?: string;
}
interface ResumeData {
  personalInformation?: PersonalInformation;
  headerBackgroundColor?: string;
  profileUrlImg?: string;
  profileDescription?: string;
  skills?: Skill[];
  showSkillLevel?: boolean;
  languages?: Skill[];
  skillsLevelColor?: string;
  education?: Education[];
  professionalExperience?: Experience[];
  internshipsExperience?: Experience[];
}

const emptydata: ResumeData = {}

const ResumeDataContext = createContext<ResumeData>(emptydata)

export const useResumeContent = () => {
  return useContext(ResumeDataContext)
}
export const ResumeDataProvider: React.FC<{children:ReactNode}> = ({ children }) => {
  const [resumeContent, setResumeContent] = useState<ResumeData>(emptydata)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    setResumeContent({
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
      headerBackgroundColor: "#ffcdd2",
      profileUrlImg: me,
      skills: [
        {
          name: "JavaScript",
          level: 80,
        },
        {
          name: "React JS",
          level: 70,
        },
        {
          name: "TypeScript",
          level: 60,
        },
        {
          name: "HTML, CSS",
          level: 70,
        },
        {
          name: "Java",
          level: 60,
        },
        {
          name: "Spring Boot",
          level: 50,
        },
        {
          name: "MongoDB",
          level: 50,
        },
        {
          name: "MySQL",
          level: 50,
        },
        {
          name: "Git, GitHub",
          level: 60,
        }
      ],
      languages: [
        {
          name: "English",
          level: 65,
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
          fechaInicio: "January 2021",
          description: `<strong>Leading</strong> and <strong>developing</strong> a <strong>Web Application</strong> to improve the internship
          process that will <strong>impact</strong> the way that university staff and students
          go through this process. Implementing <strong>RESTful services</strong> with <strong>Spring Boot
          (Java)</strong>, a <strong>Single Page Application</strong> with <strong>React JS (JavaScript)</strong>, and <strong>MongoDB</strong>
          as our database.`,
        },
        {
          role: "Front-End Developer Lead",
          company: "Polytechnic University of Sinaloa",
          location: "Mazatlán",
          fechaInicio: "November 2020",
          fechaFinal: "December 2020",
          description: `Building <strong>User Interfaces</strong> and <strong>leading</strong> a team of Front-End developers to
          deliver a <strong>Web Application</strong> that automates Water Treatment Plant processes
          and logistics. Developed using <strong>MVC</strong> pattern with <strong>Flask</strong> micro-framework,
          <strong>Bootstrap</strong> and <strong>MySQL</strong>.`,
        },
        {
          role: "Web Developer",
          company: "Red 2000",
          location: "Mazatlán",
          fechaInicio: "November 2019",
          fechaFinal: "December 2019",
          description: `<strong>Developed</strong> a <strong>Feature</strong> that is making an <strong>impact</strong> on the company <strong>most
          important product</strong>, that is built with <strong>Laravel (PHP)</strong> framework, with the
          specific purpose of reading <strong>XML</strong>, and creating templates that represent a
          <strong>CFDI</strong> from the data provided by the XML and the company database, also
          with the option to transform the templates into PDF.`,
        },
      ],
    
    })
    setLoading(false)
  },[])

  return (
    <ResumeDataContext.Provider value={resumeContent}>
      {!loading && children}
    </ResumeDataContext.Provider>

  )
}
