import { Categoria } from './categoria';
import { Container } from './styles'

interface Categorias {
  id: string,
  nome: string,
  imagem: string,
  created_at: string,
}

export function Categorias({ data }: { data: Array<Categorias> }) {
  return (
    <Container>
      {data.length > 0 && data.map(categoria => <Categoria key={categoria.id} data={categoria} />)}
    </Container>
  );
}