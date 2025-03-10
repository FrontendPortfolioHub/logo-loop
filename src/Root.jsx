import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { App } from './App';
import { StartPage } from './pages/StartPage';
import { MainProvider } from './context/MainContext';
import { HomePage } from './pages/HomePage/HomePage';
import { NewWordPage } from './pages/NewWordPage/NewWordPage';

export const Root = () => (
  <Router>
    <MainProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<StartPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="add-new-word" element={<NewWordPage />} />
        </Route>
      </Routes>
    </MainProvider>
  </Router>
);
