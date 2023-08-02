import { Container } from './styles'

interface Produtos {
  id: string,
  nome: string,
  descricao: string,
  imagem: string,
  created_at: string,
  categoriaId: string,
  preco: number,
  nomesAdd: [],
  precosAdd: []
}

export function Produtos({ data }: { data: Array<Produtos>, setData: React.Dispatch<React.SetStateAction<Produtos[]>> }) {
  return (
    <Container>
      {data && data.length > 0 && data.map(produto => produto.categoriaId)}
    </Container>
  );
}