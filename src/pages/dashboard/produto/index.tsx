import { ButtonDelete } from '../../../components/buttonDelete';
import { Modal } from '../../../components/modal';
import { ModalEditProduto } from '../../../components/modals/modalEditProduto';
import { useAuth } from '../../../contexts/auth';
import { api } from '../../../services/api';
import { CategoriasProps, ProdutosProps } from '../types';
import * as S from './styles'
import { useState } from 'react';
import { toast } from 'react-toastify';

export function Produto({ data, setList }: { data: ProdutosProps, setList: React.Dispatch<React.SetStateAction<CategoriasProps[]>> }) {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [active, setActive] = useState(data.ativado)

  const { token } = useAuth()

  async function handleDelete() {
    try {
      await api.delete(`/produto/${data.id}`, { headers: { Authorization: token } })
      setList((prev) => {
        const newData = prev.map(categoria => {
          const updateProdutos = categoria.produtos.filter(produto => produto.id != data.id)
          return { ...categoria, produtos: updateProdutos }
        })
        return newData
      })
    } catch (e: any) {
      toast.error(e.response.data.msg)
    }
  }

  function formatPrice(price: number) {
    const formattedPrice = `R$${price.toFixed(2).replace(".", ",")}`;
    return formattedPrice
  }

  async function handleUpdateActive() {
    try {
      await api.put(`/produto/${data.id}`, { ativado: !active, preco: data.preco }, { headers: { Authorization: token } })
      setActive(!active)
    } catch (e: any) {
    }
  }

  return (
    <S.Container>

      <Modal isOpen={modalIsOpen} setOpen={setModalIsOpen}>
        <ModalEditProduto data={data} setClose={() => setModalIsOpen(false)} />
      </Modal>

      <S.Header>
        <div>
          <img src={data.imagem} />
        </div>
        <div>
          <span className='name'>{data.nome}</span>
          {data.nomesAdd.length > 0 && <span className='namesadd'>{data.nomesAdd.join(' - ')}</span>}
          <span className='code'>Código: {data.code}</span>
          <p>{data.descricao}</p>
        </div>
      </S.Header>

      <S.Price>{data.precosAdd.length > 0 ? formatPrice(Math.min(...data.precosAdd)) + ' - ' + formatPrice(Math.max(...data.precosAdd)) : formatPrice(data.preco)}</S.Price>

      <S.Active>
        <S.Button onClick={() => active && handleUpdateActive()} active={!active} className={'desactive'}>Desativado</S.Button>
        <S.Button onClick={() => !active && handleUpdateActive()} active={active} className={'active'}>Ativado</S.Button>
      </S.Active>
      <S.Buttons>
        <button onClick={() => setModalIsOpen(true)}>Editar</button>
        <ButtonDelete handleExecute={handleDelete} />
      </S.Buttons>
    </S.Container>
  );
}