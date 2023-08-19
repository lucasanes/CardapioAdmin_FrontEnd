import { InputHTMLAttributes, useEffect, useState } from "react"
import { Container, ContainerInput, Icon, InputA, InputB, Progress, ProgressBar, SpanMsg } from "./styles"
import { api } from "../../services/api";
import { useAuth } from "../../contexts/auth";
import { toast } from "react-toastify";
import { useTheme } from "../../contexts/theme";

interface InputImgProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  valor: string,
  setValor: React.Dispatch<React.SetStateAction<string>>,
  marginBottom: number,
  erro: string,
  children: React.ReactNode
}

export function InputImg({ label, setValor, valor, children, marginBottom = 0, erro, ...rest }: InputImgProps) {

  const [active, setActive] = useState(false)
  const [file, setFile] = useState<File | undefined>(undefined)
  const [msg, setMsg] = useState('Enviar Foto')
  const [progress, setProgress] = useState<number>(0)

  const { theme } = useTheme()

  const { token } = useAuth()

  useEffect(() => {
    if (valor == null || valor.toString().length == 0) {
      setMsg('Enviar foto')
      setFile(undefined)
    }
  }, [valor])

  async function handleFileUpload() {

    try {
      const data = new FormData();

      if (file) {
        data.append('imagem', file);
      }

      const response = await api.post('/etc/upload', data, {
        onUploadProgress: (ProgressEvent) => {
          setMsg('Aguarde...')
          if (ProgressEvent.total != undefined) {
            setProgress((ProgressEvent.loaded / ProgressEvent.total) * 100)
          }
        },
        headers: {
          Authorization: token ? token : 'noauth'
        }
      })

      setMsg('Enviado!')
      setValor(response.data)

    } catch (e: any) {
      setProgress(0)
      setMsg('Erro!')
      toast.error(e.data.msg)
    }

  }

  useEffect(() => {

    if (file != undefined) {
      handleFileUpload()
    } else {
      setMsg('Enviar foto')
    }

  }, [file])

  return (
    <Container style={{ marginBottom: erro ? (marginBottom / marginBottom) + 'rem' : marginBottom + 'rem' }}>

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
        <div className="separador"></div>
        <InputB dark={theme == 'dark'} progresso={!file ? 'ni' : undefined}>
          <SpanMsg className="msg" msg={msg == 'Erro!' ? 'erro' : msg == 'Enviado!' ? 'enviado' : undefined}>{msg}</SpanMsg>
          <ProgressBar progresso={!file ? 'ni' : undefined}>
            <Progress style={{ width: `${progress}%` }} progresso={msg == 'Enviado!' ? 'f' : 'i'} />
          </ProgressBar>
          <input type="file" style={{ display: 'none' }} onChange={(e: any) => setFile(e.target.files[0])} />
        </InputB>
      </ContainerInput>
      <span className="span" style={{ display: erro ? 'initial' : 'none' }}>{erro}</span>
    </Container>
  )
}