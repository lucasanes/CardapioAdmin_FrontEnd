import { Button, Container, Menu, Span } from './styles';
import { useState } from 'react';
import { CategoriasProps } from '../../pages/dashboard/types';
import { IoIosArrowDown } from 'react-icons/io';
import { darkTheme } from '../../stitches.config';

export function Dropdown({ data }: { data: CategoriasProps }) {

  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Span open={open}
        onClick={() => setOpen(!open)}
      >
        {data.nome}
        <div className='icon'>
          <IoIosArrowDown size={20} color={darkTheme.colors.midContrast} />
        </div>
      </Span>

      {open &&
        <Menu
        >
          <Button>produto</Button>
          {(data.produtos?.length > 0) && data.produtos.map(produto => <Button key={produto.id}>{produto.nome}</Button>)}
        </Menu>}
    </Container>
  );
}