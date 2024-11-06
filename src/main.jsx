import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  HashRouter as Router,  // Use HashRouter instead of BrowserRouter
  Route,
  Routes,
} from "react-router-dom";

import Home from './Components/Home/Home';

// Update to use HashRouter for routing
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);
