import * as S from "./styles";

export function ModalDeleteConfirm({ setClose, handleExecute }: { setClose: () => void, handleExecute: () => void }) {

  async function handleConfirm() {
    await handleExecute()
    setClose()
  }

  return (
    <S.Container>

      <S.Header>

        <h1>Tem certeza?</h1>

      </S.Header>

      <hr />

      <h2>Ao excluir, não será possível reverter.</h2>

      <hr />

      <S.Footer>

        <S.Button color={'red'} type="button" onClick={setClose}>Cancelar</S.Button>
        <S.Button type="button" onClick={handleConfirm} >Confirmar</S.Button>

      </S.Footer>

    </S.Container>
  );
}