import { Swiper, SwiperSlide } from 'swiper/react';
import { darkTheme, styled } from '../../stitches.config';

export const Container = styled(Swiper, {

  width: '100%',
  height: '100vh',
  background: darkTheme.colors.grayBody,
  display: 'flex',

});

export const Slider = styled(SwiperSlide, {
  marginTop: '6rem'
})