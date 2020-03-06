import React from 'react';
import Header from './component/Header';
import Login from './component/Login';
import View from './component/View';
import Adult from './component/Adult';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
          <View />
          <Footer />
          {/* <Login /> */}
    </div>
  );
}

export default App;
