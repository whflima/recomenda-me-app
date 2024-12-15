import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LocalStorageItems, Modes } from './constant';
import { ProviderContext } from './components/ProviderContext';
import HomePage from './pages/HomePage';
import { Layout } from './components/Layout';
import ProfilePage from './pages/ProfilePage';

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem(LocalStorageItems.THEME) || Modes.SYSTEM
  );

  return (
    <ProviderContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ProviderContext.Provider>
  );
}
