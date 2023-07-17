export type AuthContextProps = {

  signIn: (email: string, senha: string, setValidateError: React.Dispatch<React.SetStateAction<{
    error: string;
    msg: string;
  }>>) => void,

  signOut: () => void,

  user: {
    username: string,
    email: string,
  } | null | undefined,

  restaurante: {
    name: string,
    img: string
  } | null | undefined

  token: string | null | undefined,

}

export type DataProps = {

  user: {
    username: string,
    email: string,
  } | null,

  restaurante: {
    name: string,
    img: string
  } | null

  token: string | null,

}