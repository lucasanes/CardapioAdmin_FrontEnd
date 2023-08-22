import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/auth'
import { GlobalStyles } from './styles/global'
import { Routes } from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './contexts/theme';
import { CategoriasProvider } from './contexts/categorias';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ThemeProvider>
      <CategoriasProvider>
        <GlobalStyles />
        <Routes />
        <ToastContainer />
      </CategoriasProvider>
    </ThemeProvider>
  </AuthProvider>
)
