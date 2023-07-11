export type AuthContextProps = {

  signIn: (email: string, senha: string) => void,

  signOut: () => void,

  user: {
    username: string,
    email: string,
  } | null | undefined,

  token: string | null | undefined,

}

export type DataProps = {

  user: {
    username: string,
    email: string,
    created_at: string
  } | null,

  token: string | null,

}