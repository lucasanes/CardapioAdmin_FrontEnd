import { useAuth } from '../../../contexts/auth';
import * as S from './styles'
import { ToggleTheme } from '../../../components/toggleTheme';
import { BiCategory } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export function VerticalMenu({ setBody }: { setBody: React.Dispatch<React.SetStateAction<number>> }) {

  const { restaurante } = useAuth()
  const { signOut } = useAuth()

  const [isLow, setIsLow] = useState(false)

  useEffect(() => {
    if (innerWidth < 550) {
      setIsLow(true)
    } else {
      false
    }
  }, [])

  window.addEventListener('resize', () => {
    if (innerWidth < 550) {
      setIsLow(true)
    } else {
      setIsLow(false)
    }
  })

  return (
    <S.Container>

      <S.Logo>
        <img src="https://logospng.org/download/bmw/logo-bmw-1024.png" width={'40px'} />
        {!isLow && <>
          <span className='span1'>Menu</span>
          <span className='span2'>Admin</span>
        </>}
      </S.Logo>

      <S.Bar>
        <S.Account>
          <img src={restaurante?.img} />
          {!isLow && <span>{restaurante?.name}</span>}
          <div>
            <button>Editar</button>
            <button onClick={signOut}>Sair</button>
          </div>
        </S.Account>
        <div className='cut'></div>
        <S.CategoriasMenu>
          <S.Buttons>
            <S.Button onClick={() => setBody(0)}><BiCategory size={20} />{!isLow && 'Categorias'}</S.Button>
            <S.Button onClick={() => setBody(1)}><BsBoxSeam size={19} />{!isLow && 'Produtos'}</S.Button>
          </S.Buttons>
        </S.CategoriasMenu>
        <ToggleTheme style={{ position: 'absolute', bottom: 45, transform: 'scale(0.8)' }} />
      </S.Bar>
    </S.Container>
  );
}