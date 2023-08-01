import { useState } from 'react';
import { Modal } from '../../../components/modal';
import { Categoria } from './categoria';
import { Body, Button, Container } from './styles'
import { ModalCreateCategoria } from '../../../components/modals/modalCreateCategoria';

interface Categorias {
  id: string,
  nome: string,
  imagem: string,
  created_at: string,
}

export function Categorias({ data, setData }: { data: Array<Categorias>, setData: React.Dispatch<React.SetStateAction<Categorias[]>> }) {

  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false)

  return (
    <Container>

      <Modal isOpen={modalCreateIsOpen} setOpen={setModalCreateIsOpen}>
        <ModalCreateCategoria setList={setData} setClose={() => setModalCreateIsOpen(false)} />
      </Modal>

      <Button onClick={() => setModalCreateIsOpen(true)}>Criar Categoria</Button>
      <Body>
        {data && data.length > 0 && data.map(categoria => <Categoria key={categoria.id} data={categoria} setList={setData} />)}
      </Body>
    </Container>
  );
}