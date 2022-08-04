import React from 'react';
import { createRoot } from 'react-dom/client';
import "./App.css";
import App from "./App"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
  </BrowserRouter>,
);

