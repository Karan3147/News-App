import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import News from './Components/News';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize={6} category="general" />} />
          <Route exact path="/Business" element={<News key="business" pageSize={6} category="business" />} />
          <Route exact path="/entertainment" key="entertainment" element={<News key="entertainment" pageSize={6} category="entertainment" />} />
          <Route exact path="/sports" element={<News key="sports" pageSize={6} category="sports" />} />
          <Route exact path="/health" element={<News key="health" pageSize={6} category="health" />} />
          <Route exact path="/technology" element={<News key="technology" pageSize={6} category="technology" />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
