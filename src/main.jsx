import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Components/Home/Home';
import Odcreport from './Components/Odc/Odcreport';
import Root from './Components/Root/Root';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>              {/* Root path */}
          <Route index element={<Home />} />             {/* Default route at "/imp/" */}
          <Route path="home" element={<Home />} />       {/* "/imp/home" route */}
          <Route path="report" element={<Odcreport />} />{/* "/imp/report" route */}
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
