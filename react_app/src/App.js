import Nav from './nav/nav';
import Cards from './cards/cards';
import './css/out.css';
import React from 'react';


function App() {
  return (
    <React.Children>
          <Nav />
          <Cards />
    </React.Children>
  );
}



export default App;
