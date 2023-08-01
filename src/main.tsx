import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/auth'
import { GlobalStyles } from './styles/global'
import { Routes } from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './contexts/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  </AuthProvider>
)
