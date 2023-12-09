import React from 'react';
import Stars from './components/Stars'
import './css/main.css';

function App() {
  return (
    <div className="main-content">
      <Stars count={Number(3)}/>
    </div>
  );
}

export default App;
