import { useEffect, useState } from "react";
import { Container, Content, ContentContainer } from "./styles";
import { ThemeProvider } from "../../contexts/theme";

type ModalProps = {
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  children: React.ReactNode
}

export function Modal({ isOpen, setOpen, children }: ModalProps) {

  const [realIsOpen, setRealIsOpen] = useState(isOpen)

  useEffect(() => {

    if (isOpen) {
      setRealIsOpen(true)
    } else {
      setTimeout(() => {
        setRealIsOpen(false)
      }, 170);
    }

  }, [isOpen])

  return (
    <Container open={realIsOpen} onClose={() => setOpen(false)}>
      <ThemeProvider>
        <ContentContainer>
          <Content animation={isOpen}>{children}</Content>
        </ContentContainer>
      </ThemeProvider>
    </Container>
  );
}