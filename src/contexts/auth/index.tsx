import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../services/api.js";
import { toast } from "react-toastify";
import { AuthContextProps, DataProps } from "./types.js";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthProvider({ children }: { children: React.ReactNode }) {

  const [data, setData] = useState<DataProps>({} as DataProps);

  async function signIn(email: string, senha: string) {

    try {

      const response = await api.post('/user/login', { email, senha });

      const dadosUser = {
        username: response.data.user.username,
        email: response.data.user.email,
        created_at: response.data.user.created_at
      }

      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
      setData({ user: dadosUser, token: response.data.token });

      localStorage.setItem("@cardapiosadmin:token", response.data.token);

      toast.success('Sucesso ao fazer login!')

    } catch (e: any) {
      toast.error(e.response.data.msg)
    }

  }

  function signOut() {

    localStorage.removeItem("@cardapiosadmin:token");

    window.location.replace('/')

    setData({ user: null, token: null })

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
            created_at: response.data.user.created_at
          }

          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          setData({ user: dadosUser, token: response.data.token });

        } catch {
          signOut()
        }

      }

      fetchData()
    } else {
      setData({ user: null, token: null })
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data?.user,
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