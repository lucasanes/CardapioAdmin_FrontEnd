import 'swiper/css';
import { ToggleTheme } from '../../components/toggleTheme';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services/api';
import { Categorias } from './categorias';
import { Produtos } from './produtos';
import { Container, Slider } from './styles'
import { TopMenu } from './topMenu';
import { useEffect, useState } from 'react';

export function Dashboard() {

  interface Categorias {
    id: string,
    nome: string,
    imagem: string,
    created_at: string,
  }

  interface Produtos {
    id: string,
    nome: string,
    descricao: string,
    imagem: string,
    created_at: string,
    categoriaId: string,
    preco: number,
    nomesAdd: [],
    precosAdd: []
  }

  const [data, setData] = useState<{ categorias: Array<Categorias>, produtos: Array<Produtos> }>({ categorias: [], produtos: [] })

  const { token } = useAuth()

  useEffect(() => {

    async function fetchData() {
      const response = await api.get(`/etc/restaurante/${token}`)
      setData({ categorias: response.data.categorias, produtos: response.data.categorias.map((categoria: { produtos: [] }) => categoria.produtos)[0] })
    }

    fetchData()

  }, [])

  return (
    <Container grabCursor threshold={10}>

      <ToggleTheme style={{ position: 'absolute', bottom: 30, left: 15 }} />
      <TopMenu />

      <Slider>
        <Categorias data={data.categorias} />
      </Slider>

      <Slider>
        <Produtos data={data.produtos} />
      </Slider>


    </Container>
  );
}