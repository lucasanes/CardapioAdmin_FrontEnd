import { Container } from './styles'

type CategoriaProps = {
  data: {
    id: string,
    nome: string,
    imagem: string,
    created_at: string,
  }
}

export function Categoria({ data }: CategoriaProps) {
  return (
    <Container>
      <span>{data.nome}</span>
      <hr />
      <img src={data.imagem} />
    </Container>
  );
}