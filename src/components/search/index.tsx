import { darkTheme } from '../../stitches.config';
import * as S from './styles'
import { BiSearchAlt } from 'react-icons/bi'

export function Search({ valor, setValor }: { valor: string, setValor: React.Dispatch<React.SetStateAction<string>> }) {

    return (
        <S.Container>
            <BiSearchAlt color={darkTheme.colors.icons} size={23} />
            <S.Input value={valor} id='busca' type="text" placeholder='Procurar' onChange={(e) => setValor(e.target.value)} />
        </S.Container>
    );
}