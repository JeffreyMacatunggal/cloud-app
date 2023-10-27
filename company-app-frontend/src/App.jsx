import React from 'react';
import CompanyForm from './components/CompanyForm';
import SuccessPage from './components/SuccessPage';
import NotFound from './components/NotFound';  // Import NotFound component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyForm />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<NotFound />} />  {/* Add this line for the catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
