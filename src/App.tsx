import React from 'react';
import { Header } from './components/header/Header';

const App: React.FC = () => {
  return (
    <>
    <Header 
      personalInformation={{
        name: "Abdiel Zamudio",
        title: "Information Technology Engineer",
        city: "Mazatlán",
        state: "Sinaloa",
        country: "México",
        github: "https://github.com/eliuabdiel",
        linkedin: "https://www.linkedin.com/in/abdiel-zamudio/",
        number: 6692215558,
        email: "eliu_070@hotmail.com"
      }}
      
    />
    </>
  )
}

export default App;
