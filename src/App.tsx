import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LocalStorageItems, Modes } from './constant';
import { ProviderContext } from './components/providerContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem(LocalStorageItems.THEME) || Modes.SYSTEM
  );

  return (
    <ProviderContext.Provider value={{ theme, setTheme }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ProviderContext.Provider>
  );
}
