import { useAuth } from '../../../contexts/auth';
import { Button, Buttons, Container, Intro } from './styles'
import { GiChefToque } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import { Dropdown } from '../../../components/dropdown';
import { darkTheme } from '../../../stitches.config';
import { useSwiper } from 'swiper/react';

export function TopMenu() {

  const { restaurante } = useAuth()

  const [cell, setCell] = useState(false)

  const swiper = useSwiper()
  const [active, setActive] = useState(swiper.activeIndex)

  swiper.on('slideChange', () => {
    setActive(swiper.activeIndex)
  })

  useEffect(() => {

    if (innerWidth < 800) {
      setCell(true)
    } else {
      setCell(false)
    }

  }, [])

  window.addEventListener('resize', () => {
    if (innerWidth < 800) {
      setCell(true)
    } else {
      setCell(false)
    }
  })

  return (
    <Container>
      {!cell && <Intro>
        <GiChefToque style={{ transition: '.3s' }} size={28} color={darkTheme.colors.midContrast} />
        <h1>Cardápio Admin</h1>
      </Intro>}

      <Buttons>
        <Button onClick={() => swiper.slideTo(0)} active={active == 0}>Categorias</Button>
        <Button onClick={() => swiper.slideTo(1)} active={active == 1}>Produtos</Button>
      </Buttons>

      <Dropdown nome={restaurante?.name} img={restaurante?.img} />
    </Container>
  );
}