import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/api.js";
import { AuthContextProps, DataProps } from "./types.js";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: { children: React.ReactNode }) {

  const [data, setData] = useState<DataProps>({} as DataProps);

  async function signIn(email: string, senha: string, setValidateError: React.Dispatch<React.SetStateAction<{ error: string; msg: string; }>>) {

    try {

      const response = await api.post('/user/login', { email, senha });

      const dadosUser = {
        username: response.data.user.username,
        email: response.data.user.email,
      }

      const dadosRestaurante = {
        name: response.data.restaurante.nome,
        img: response.data.restaurante.imagem
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setData({ user: dadosUser, restaurante: dadosRestaurante, token: response.data.token });

      localStorage.setItem("@cardapiosadmin:token", response.data.token);

    } catch (e: any) {
      setValidateError({ error: 'senha', msg: e.response.data.msg })
    }

  }

  function signOut() {

    localStorage.removeItem("@cardapiosadmin:token");

    window.location.replace('/')

    setData({ user: null, restaurante: null, token: null })

  }

  useEffect(() => {

    const token = localStorage.getItem("@cardapiosadmin:token");

    if (token != null) {

      async function fetchData() {

        try {

          const response = await api.get(`/user/token/${token}`);

          const dadosUser = {
            username: response.data.user.username,
            email: response.data.user.email,
          }

          const dadosRestaurante = {
            name: response.data.restaurante.nome,
            img: response.data.restaurante.imagem
          }

          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setData({ user: dadosUser, restaurante: dadosRestaurante, token: response.data.token });

        } catch {
          signOut()
        }

      }

      fetchData()
    } else {
      setData({ user: null, restaurante: null, token: null })
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data?.user,
        restaurante: data?.restaurante,
        token: data?.token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, AuthContext };