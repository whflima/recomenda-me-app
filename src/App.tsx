import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import Provider from './components/ProviderContext';
import { Layout } from './components/Layout';
import MessagesPage from './pages/MessagesPage';

export default function App() {
  return (
    <Provider>
      <BrowserRouter basename="recomenda-me-app">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
