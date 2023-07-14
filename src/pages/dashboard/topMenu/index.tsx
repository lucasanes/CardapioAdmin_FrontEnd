import { useAuth } from '../../../contexts/auth';
import { Button, Buttons, Container, DropdownDiv, Intro } from './styles'
import { GiChefToque } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { Dropdown } from '../../../components/dropdown';

export function TopMenu({ }) {

  const { user } = useAuth()

  const [cell, setCell] = useState(false)

  useEffect(() => {

    if (innerWidth < 800) {
      setCell(true)
    } else {
      setCell(false)
    }

  }, [])

  window.addEventListener('resize', () => {
    if (innerWidth < 800) {
      setCell(true)
    } else {
      setCell(false)
    }
  })

  return (
    <Container>
      {!cell && <Intro>
        <GiChefToque style={{ transition: '.3s' }} size={30} color='#fff' />
        <h1>Cardápio Admin</h1>
      </Intro>}

      <Buttons>
        <Button active={false}>Categorias</Button>
        <Button active={true}>Produtos</Button>
      </Buttons>

      <DropdownDiv>
        <img src="https://i.pinimg.com/736x/05/2c/17/052c17e923e9dba52146092458679719.jpg" />
        <Dropdown nome={user?.restaurante} />
      </DropdownDiv>
    </Container>
  );
}