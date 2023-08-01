import { useState } from 'react';
import { ButtonDelete } from '../../../../components/buttonDelete';
import { ButtonEdit } from '../../../../components/buttonEdit';
import { useAuth } from '../../../../contexts/auth';
import { api } from '../../../../services/api';
import { Container, Header } from './styles'
import { Modal } from '../../../../components/modal';
import { ModalEditCategoria } from '../../../../components/modals/modalEditCategoria';

type CategoriaProps = {
  id: string,
  nome: string,
  imagem: string,
  created_at: string,
}

export function Categoria({ data, setList }: { data: CategoriaProps, setList: React.Dispatch<React.SetStateAction<CategoriaProps[]>> }) {

  const { token } = useAuth()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  async function handleDelete() {

    await api.delete(`/categoria/${data.id}`, { headers: { Authorization: token } })
    setList(rest => [...rest.filter(categoria => data.id != categoria.id)])

  }

  return (
    <Container>

      <Modal isOpen={modalIsOpen} setOpen={setModalIsOpen}>
        <ModalEditCategoria data={data} setClose={() => setModalIsOpen(false)} />
      </Modal>

      <Header>
        <span>{data.nome}</span>
        <div>
          <ButtonEdit onClick={() => setModalIsOpen(true)} />
          <ButtonDelete handleExecute={handleDelete} />
        </div>
      </Header>
      <hr />
      <img src={data.imagem} />
    </Container>
  );
}