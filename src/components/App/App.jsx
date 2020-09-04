import React from 'react';
import './App.css';
import Header from '../Header/Header.jsx';
import Info from '../Info/Info.jsx';
import Menu from '../Menu/Menu.jsx';
import ProfileSettings from '../ProfileSettings/ProfileSettings.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="content">
        <Info />
        <Menu />
        <ProfileSettings />
      </main>
      <Footer />
    </div>
  );
}

export default App;
