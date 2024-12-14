import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LocalStorageItems, Modes } from './constant';
import { ProviderContext } from './components/ProviderContext';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem(LocalStorageItems.THEME) || Modes.SYSTEM
  );

  return (
    <ProviderContext.Provider value={{ theme, setTheme }}>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        <NavBar />
        <main className="p-4 md:ml-64 h-auto pt-20">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </ProviderContext.Provider>
  );
}
