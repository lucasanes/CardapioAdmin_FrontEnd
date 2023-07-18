import { InputHTMLAttributes, useEffect, useState } from "react"
import { Container, ContainerInput, Icon, InputA, InputB, Progress, ProgressBar, SpanMsg } from "./styles"
import { api } from "../../services/api";

interface InputImgProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  valor: string,
  setValor: React.Dispatch<React.SetStateAction<string>>,
  marginBottom?: number,
  children: React.ReactNode
}

export function InputImg({ label, setValor, valor, children, marginBottom, ...rest }: InputImgProps) {

  const [erro, seterro] = useState('')
  const [active, setActive] = useState(false)
  const [file, setFile] = useState<File | undefined>(undefined)
  const [msg, setMsg] = useState('Enviar Foto')
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    if (valor == null || valor.toString().length == 0) {
      setMsg('Enviar foto')
      setFile(undefined)
      seterro('')
    }
  }, [valor])

  async function handleFileUpload() {

    try {
      const data = new FormData();

      if (file) {
        data.append('imagem', file);
        data.append('token', 'noauth')
      }

      const response = await api.post('/etc/upload', data, {
        onUploadProgress: (ProgressEvent) => {
          setMsg('Aguarde...')
          if (ProgressEvent.total != undefined) {
            setProgress((ProgressEvent.loaded / ProgressEvent.total) * 100)
          }
        },
      })

      setMsg('Enviado!')
      setValor(response.data)
      seterro('')

    } catch (e: any) {
      setProgress(0)
      setMsg('Erro!')
      seterro(e.data.msg)
    }

  }

  useEffect(() => {

    if (file != undefined) {
      handleFileUpload()
    } else {
      setMsg('Enviar foto!')
      seterro('')
    }

  }, [file])

  return (
    <Container style={{ marginBottom: marginBottom ? `${marginBottom}rem` : 0 }}>

      <ContainerInput active={active}>
        <Icon active={active}>{children}</Icon>
        <InputA placeholder={label} value={valor} type={'text'} {...rest}
          onChange={(event) => {
            setValor(event.target.value)
          }}
          onFocus={() => {
            setActive(true)
          }}
          onBlur={() => {
            setActive(false)
          }}
        />
        <InputB active={active} progresso={!file ? 'ni' : undefined}>
          <SpanMsg className="msg" msg={msg == 'Erro!' ? 'erro' : msg == 'Enviado!' ? 'enviado' : undefined}>{msg}</SpanMsg>
          <ProgressBar progresso={!file ? 'ni' : undefined}>
            <Progress style={{ width: `${progress}%` }} progresso={msg == 'Enviado!' ? 'f' : 'i'} />
          </ProgressBar>
          <input type="file" style={{ display: 'none' }} onChange={(e: any) => setFile(e.target.files[0])} />
        </InputB>
      </ContainerInput>
      {erro && <span className="span">{erro}</span>}
    </Container>
  )
}