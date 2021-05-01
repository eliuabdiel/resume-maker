import { Body } from './components/body/Body';
import { Header } from './components/header/Header';
import { ProfessionalBackground } from './components/professionalBackground/ProfessionalBackground';
import { SkillsList } from './components/skillsList/SkillsList';


const App: React.FC = () => {
  
  return (
      <div style={{width: "900px", margin: "auto"}}>
        <Header/>
        <Body>
          <SkillsList/>
          <ProfessionalBackground/>
        </Body>
      </div>
  )
}

export default App;
