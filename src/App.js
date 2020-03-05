import React from 'react';
import Header from './component/Header';
import Login from './component/Login';
import View from './component/View';
import Adult from './component/Adult';
import Contact from './component/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
          <View />
          <Contact />
          {/* <Login /> */}
    </div>
  );
}

export default App;
