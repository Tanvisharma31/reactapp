import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './user-dashboard/Main/MainApp';
import LoginPage from './pages/LoginPage';
import PasswordResetPage from './pages/PasswordResetPage';
import LearnModule from './user-dashboard/LearningModule/LearnModule';
const Routing = () => {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/password-reset" element={<PasswordResetPage />} />
        <Route path="/mainApp" element={<Main />} />
        <Route path="/learnmodules" element={<LearnModule/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
  );
};
export default Routing;


