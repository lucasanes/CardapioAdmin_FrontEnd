import React from "react"

export type ThemeContextProps = {

  theme: string | undefined | null,
  setTheme: React.Dispatch<React.SetStateAction<string>>

}