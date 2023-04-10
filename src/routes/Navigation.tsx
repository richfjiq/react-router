import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { LazyPage1, LazyPage2, LazyPage3 } from '../lazyload/pages';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lazy1" element={<LazyPage1 />} />
        <Route path="/lazy2" element={<LazyPage2 />} />
        <Route path="/lazy3" element={<LazyPage3 />} />
        <Route path="/*" element={<Navigate to="/lazy1" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
