import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Recovery } from '../pages/recovery';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recuperar-senha' element={<Recovery />} />
    </Routes>
  );
}