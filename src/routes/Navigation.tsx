import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Suspense } from 'react';

const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={`${path}`} element={<Component />} />
          ))}
          <Route path="/*" element={<Navigate to={routes[0].path} replace />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
