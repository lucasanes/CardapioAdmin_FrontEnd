import { Produto } from '../produto';
import { CategoriasProps } from '../types';
import * as S from './styles'

export function Produtos({ data, setList }: { data: CategoriasProps, setList: React.Dispatch<React.SetStateAction<CategoriasProps[]>> }) {

  return (<>
    {data.produtos.length > 0 &&
      <S.Container>
        <S.Header>
          <span>{data.nome}</span>
        </S.Header>

        <S.Body>
          {data.produtos.map((produto) => <Produto key={produto.id} data={produto} setList={setList} />)}
        </S.Body>
      </S.Container>
    }
  </>);
}