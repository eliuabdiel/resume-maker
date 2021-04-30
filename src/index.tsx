import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ResumeDataProvider} from "./context/ResumeDataContext"

ReactDOM.render(
  <React.StrictMode>
    <ResumeDataProvider>
      <App />
    </ResumeDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

