import { Container } from './styles'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function NotFound() {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {

    setTimeout(() => {
      navigate('/')
    }, 3000);

  }, [])

  return (
    <Container>
      <div>
        <h1>404</h1>
        <h2>Página Não Encontrada</h2>
      </div>
      <div>
        <h3>A URL "{location.pathname}" não existe ou está com alguns problemas no momento.</h3>
        <h3>Volte mais tarde ou peça ajuda se acha que isto é um erro.</h3>
        <h3>Você será redirecionado à home automaticamente em 3 segundos.</h3>
      </div>
    </Container>
  );
}