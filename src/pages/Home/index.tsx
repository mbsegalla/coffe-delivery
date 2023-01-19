import Header from '../../components/Header'
import coffeHomeImage from '../../assets/coffe-home.png'
import theme from '../../styles/theme'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import CafesCard from '../../components/CafesCard'
import {
  DescriptionContent,
  BackgroundContainer,
  ImageContainer,
  InfoContainer,
  RoundedIcon,
  TextContainer,
  InfoContent,
  Title,
  Subtitle,
  Image,
} from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <>
        <BackgroundContainer />
        <DescriptionContent>
          <TextContainer>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora.
            </Subtitle>
            <InfoContainer>
              <InfoContent>
                <RoundedIcon style={{ backgroundColor: theme['yellow-dark'] }}>
                  <ShoppingCart weight="fill" />
                </RoundedIcon>
                Compra simples e segura
              </InfoContent>
              <InfoContent>
                <RoundedIcon style={{ backgroundColor: theme['base-text'] }}>
                  <Package weight="fill" />
                </RoundedIcon>
                Embalagem mantém o café intacto
              </InfoContent>
              <InfoContent>
                <RoundedIcon style={{ backgroundColor: theme.yellow }}>
                  <Timer weight="fill" />
                </RoundedIcon>
                Entrega rápida e rastreada
              </InfoContent>
              <InfoContent>
                <RoundedIcon style={{ backgroundColor: theme.purple }}>
                  <Coffee weight="fill" />
                </RoundedIcon>
                O café chega fresquinho até você
              </InfoContent>
            </InfoContainer>
          </TextContainer>
          <ImageContainer>
            <Image src={coffeHomeImage} alt="" />
          </ImageContainer>
        </DescriptionContent>
        <CafesCard />
      </>
    </>
  )
}

export default Home
