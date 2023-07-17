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
      {data.map(categoria => categoria.nome)}
    </Container>
  );
}