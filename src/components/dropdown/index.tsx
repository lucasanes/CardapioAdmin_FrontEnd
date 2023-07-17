import { Button, ButtonLink, Container, Menu, Span } from './styles';
import { IoIosArrowDown } from 'react-icons/io'
import { useState, useEffect } from 'react';
import { FiUser, FiUserX } from 'react-icons/fi'
import { darkTheme } from '../../stitches.config';
import { useAuth } from '../../contexts/auth';

export function Dropdown({ img, nome }: { nome: string | undefined, img: string | undefined }) {

  const [open, setOpen] = useState(false)
  const [cell, setCell] = useState(false)

  const { signOut } = useAuth()

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
      <Span open={open} onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
        <img src={img} />
        {!cell && nome}
        <div className='icon'>
          <IoIosArrowDown size={20} color={darkTheme.colors.midContrast} />
        </div>
      </Span>

      {open && <Menu onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
        <li>
          <ButtonLink to={'/conta'} style={{ gap: '1.3rem' }}><FiUser size={20} />Conta</ButtonLink>
        </li>
        <li className="menu-item">
          <Button onClick={signOut} style={{ marginLeft: '.3rem' }}><FiUserX size={20} />Sair</Button>
        </li>
      </Menu>}
    </Container>
  );
}