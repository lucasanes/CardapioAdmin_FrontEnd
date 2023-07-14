import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login';
import { Recovery } from '../pages/recovery';
import { NotFound } from '../pages/notFound';
import { Cadastro } from '../pages/cadastro';

export function NoAuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/cadastro' element={<Cadastro />} />
      <Route path='/recuperar-senha' element={<Recovery />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}