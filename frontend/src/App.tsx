import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './pages/styles/App.css';
import { Home } from './pages/home';
import { LoginPage } from './pages/loginPage'; // Import LoginPage component
import { CssBaseline, Container } from '@mui/material';
import { MarketPage } from './pages/marketPage';
import { RegisterPage } from './pages/registerPage';
import { ErrorPage } from './pages/404';
import { Dashboard } from './pages/dashboard';
import { HomeRegistering } from './pages/homeRegistering';
import { ChatApp } from './pages/chatPage';
import { SettingsPage } from './pages/settingsPage';
import { Listings } from './pages/admin/Listings';
import { Transactions } from './pages/admin/Transactions';
import { Analytics } from './pages/admin/Analytics';

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Container className="main-content">
          <header className="App-header">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Login" element={<LoginPage />} />
              <Route path="/Register" element={<RegisterPage />} />
              <Route path="/Market" element={<MarketPage />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<HomeRegistering />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Chatroom" element={<ChatApp />} />
              <Route path="/Settings" element={<SettingsPage />} />
              <Route path="/Listings" element={<Listings />} />
              <Route path="/Transactions" element={<Transactions />} />
              <Route path="/Users" element={<Transactions />} />
              <Route path="/Analytics" element={<Analytics />} />
            </Routes>
          </header>
        </Container>
      </div>
    </Router>
  );
}

export default App;
