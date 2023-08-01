import { Body, Button, Container, Footer, Header } from "./styles";

export function ModalDeleteConfirm({ setClose, handleExecute }: { setClose: () => void, handleExecute: () => void }) {

  async function handleConfirm() {
    await handleExecute()
    setClose()
  }

  return (
    <Container>

      <Header>

        <h1>Tem certeza?</h1>
        <button type="button" onClick={setClose}>x</button>

      </Header>

      <hr />

      <Body>

        <h2>Ao deletar/desvincular, não será possível reverter.</h2>

      </Body>

      <hr />

      <Footer>

        <Button color={'red'} type="button" onClick={setClose}>Cancelar</Button>
        <Button type="button" onClick={handleConfirm} >Confirmar</Button>

      </Footer>

    </Container>
  );
}