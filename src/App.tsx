import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Provider from './components/ProviderContext';
import { Layout } from './components/Layout';
import MessagesPage from './pages/MessagesPage';
import SettingsPage from './pages/SettingsPage';
import MyMoviesPage from './pages/MyMoviesPage';

export default function App() {
  return (
    <Provider>
      <BrowserRouter basename="recomenda-me-app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/my-movies" element={<MyMoviesPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
