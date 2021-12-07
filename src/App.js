import React from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';
import MenuBar from './components/MenuBar';

export default function App() {
  return (
    <main className="relative min-h-screen md:flex font-NotoSans">
      <Sidebar />
      <div className="h-screen flex-1">
        <MenuBar />
        <Content />
      </div>
    </main>
  );
}