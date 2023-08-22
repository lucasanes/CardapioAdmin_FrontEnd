import { createContext, useContext, useState } from "react";
import { CategoriasProps } from "../../pages/dashboard/types.js";

export type CategoriasContextProps = {

  categorias: CategoriasProps[],
  setCategorias: React.Dispatch<React.SetStateAction<CategoriasProps[]>>

}

const CategoriasContext = createContext<CategoriasContextProps>({} as CategoriasContextProps);

function CategoriasProvider({ children }: { children: React.ReactNode }) {

  const [categorias, setCategorias] = useState<CategoriasProps[]>([]);

  return (
    <CategoriasContext.Provider
      value={{
        categorias,
        setCategorias
      }}
    >
      {children}
    </CategoriasContext.Provider>
  );
}

function useCategorias() {
  const context = useContext(CategoriasContext);

  return context;
}

export { CategoriasProvider, useCategorias, CategoriasContext };