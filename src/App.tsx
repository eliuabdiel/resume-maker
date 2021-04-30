import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { ProfessionalBackground } from './components/professionalBackground/ProfessionalBackground';
import { SkillsList } from './components/skillsList/SkillsList';
import { useResumeContent } from "./context/ResumeDataContext"


const App: React.FC = () => {
  const  resumeContent  = useResumeContent()
  return (
      <div style={{width: "900px", margin: "auto"}}>
        <Header
          personalInformation={
            resumeContent?.personalInformation
          }
          backgroundColor={resumeContent?.headerBackgroundColor}
          imgUrl={resumeContent?.profileUrlImg}
        />
        <Body>
          <SkillsList
            skills={resumeContent?.skills}
            languages={resumeContent?.languages}
            color={resumeContent?.skillsLevelColor}
            showSkillLevel={resumeContent?.showSkillLevel}
          />
          <ProfessionalBackground
            profileDescription={resumeContent?.profileDescription}
            education={resumeContent?.education}
            professionalExperiences={resumeContent?.professionalExperience}
            internshipsExperience={resumeContent?.internshipsExperience}
          />
        </Body>
      </div>
  )
}

export default App;
