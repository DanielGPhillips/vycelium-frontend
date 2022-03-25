//React Import
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// MUI Component Import
// Component Import
import Navatar from './components/Navatar';
// Route Import
import Routing from './utils/Routing';

function App() {
  return (
    <Router>
      <Routing />            
    </Router>
  );
}

export default App;
