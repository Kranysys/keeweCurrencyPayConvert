import React, { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { checkServerVersion } from '~/utils';

import PaymentPage from './PaymentPage';
import CurrencyConverterPage from './CurrencyConverterPage';
import HistoryPage from './HistoryPage';
import NavBar from './NavBar';

export const App: FC<unknown> = () => {
  useEffect(() => {
    checkServerVersion();
  }, []);

  return (
    <Router>
      <NavBar />

      <div className="page">
        <Routes>
          <Route path="/" element={<PaymentPage />} />
          <Route path="/convert" element={<CurrencyConverterPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
