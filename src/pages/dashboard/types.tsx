export interface ProdutosProps {
  id: string,
  code: string,
  nome: string,
  descricao: string,
  imagem: string,
  created_at: string,
  categoriaId: string,
  preco: number,
  nomesAdd: [],
  precosAdd: []
}

export interface CategoriasProps {
  id: string,
  nome: string,
  imagem: string,
  created_at: string,
  produtos: Array<ProdutosProps>
}