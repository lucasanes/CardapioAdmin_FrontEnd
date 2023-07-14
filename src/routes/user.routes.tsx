import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/notFound';
import { Dashboard } from '../pages/dashboard';

export function UserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}