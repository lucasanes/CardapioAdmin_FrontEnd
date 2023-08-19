import { ButtonDelete } from '../../../components/buttonDelete';
import { Modal } from '../../../components/modal';
import { ModalEditCategoria } from '../../../components/modals/modalEditCategoria';
import { useAuth } from '../../../contexts/auth';
import { api } from '../../../services/api';
import { CategoriasProps } from '../types';
import * as S from './styles'
import { useState } from 'react';
import { toast } from 'react-toastify';

export function Categoria({ data, setList }: { data: CategoriasProps, setList: React.Dispatch<React.SetStateAction<CategoriasProps[]>> }) {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { token } = useAuth()

  async function handleDelete() {
    try {
      await api.delete(`/categoria/${data.id}`, { headers: { Authorization: token } })
      setList(rest => [...rest.filter(categoria => categoria.id != data.id)])
    } catch (e: any) {
      toast.error(e.response.data.msg)
    }
  }

  return (
    <S.Container>

      <Modal isOpen={modalIsOpen} setOpen={setModalIsOpen}>
        <ModalEditCategoria data={data} setClose={() => setModalIsOpen(false)} />
      </Modal>

      <S.Header>
        <span>{data.nome}</span>
      </S.Header>

      <S.Imagem>
        <img src={data.imagem} />
      </S.Imagem>

      <S.Footer>
        <button onClick={() => setModalIsOpen(true)}>Editar</button>
        <ButtonDelete handleExecute={handleDelete} />
      </S.Footer>
    </S.Container>
  );
}