import { Container, Menu, Span } from './styles';
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react';

export function Dropdown({ nome }: { nome: string | undefined }) {

  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Span open={open} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        {nome}
        <div className='icon'>
          <IoIosArrowDown size={22} color="#fff" />
        </div>
      </Span>

      {open && <Menu onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
        <li className="menu-item">
          <button>Menu 1</button>
        </li>
        <li className="menu-item">
          <button>Menu 2</button>
        </li>
      </Menu>}
    </Container>
  );
}