import React, { ReactNode, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LandingPage from './pages/LandingPage';
import AboutUSpage from './pages/AboutUSpage';
import ContactUsPage from "./pages/ContactUsPage"
import Profile from "./pages/Profile"; // Correct import
import Register from './pages/Register';
import ShopAll from "./pages/ShopAll";
import Reviews from "./pages/Reviews";


const ProtectedRoute = ({ children }: { children: ReactNode }): ReactElement | null => {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    return <Navigate to="/profile" replace />;
  }
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
  

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ShopAll" element={<ShopAll/>} />
          <Route path="/Reviews" element={<Reviews/>} />
          <Route path="/AboutUSpage" element={<AboutUSpage/>} />
          <Route path="/ContactUsPage" element={<ContactUsPage/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Register" element={<Register/>} />
        
        </Routes>
      </Router>

  );
};

export default App;