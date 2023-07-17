import { Container, Input, Label } from './styles'
import { RxMoon } from 'react-icons/rx'
import { PiSunHorizonLight } from 'react-icons/pi'
import { useTheme } from '../../contexts/theme';

export function ToggleTheme({ ...rest }) {

  const { theme, setTheme } = useTheme()

  function handleToggle() {
    setTheme(theme == 'light' ? 'dark' : 'light')
    localStorage.setItem("@cardapiosadmin:theme", theme == 'light' ? 'dark' : 'light')
  }

  return (
    <Container {...rest}>
      <Input defaultChecked={localStorage.getItem("@cardapiosadmin:theme") == 'dark'} type="checkbox" id="darkmode-toggle" onChange={handleToggle} />
      <Label checked={theme == 'dark'} htmlFor="darkmode-toggle">
        <PiSunHorizonLight color={theme == 'light' ? "#fff" : '#7e7e7e'} size={24} version='1.1' className='sun' />
        <RxMoon color={theme == 'dark' ? "#fff" : '#7e7e7e'} size={22} version='1.1' className='moon' />
      </Label>
    </Container>
  );
}