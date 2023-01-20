import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import cafesData from '../../data/cafes'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../utils/formatPrice'
import {
  Card,
  CardArea,
  CoffeDescription,
  CoffeName,
  CoffeFooter,
  CoffeTag,
  Container,
  RealSign,
  Tag,
  CoffePrice,
  SelectQtyCafes,
  CartButton,
  ButtonsFooter,
  Button,
  Title,
  Image,
} from './styles'

const CafesCard = () => {
  const { cartItems, addToCart, decrement } = useCart()
  console.log(cartItems)

  return (
    <Container>
      <Title>Nossos cafés</Title>
      <CardArea>
        {cafesData.map((coffe: any) => (
          <Card key={coffe.id}>
            <Image src={coffe.image} alt={coffe.name} />
            <Tag>
              {coffe.tags.map((tag: any) => (
                <CoffeTag key={tag}>{tag}</CoffeTag>
              ))}
            </Tag>
            <CoffeName>{coffe.name}</CoffeName>
            <CoffeDescription>{coffe.description}</CoffeDescription>
            <CoffeFooter>
              <div>
                <RealSign>R$</RealSign>
                <CoffePrice>{formatPrice(coffe.price)}</CoffePrice>
              </div>
              <ButtonsFooter>
                <SelectQtyCafes>
                  <Button onClick={() => decrement(coffe)}>
                    <Minus weight="fill" />
                  </Button>
                  <span>1</span>
                  <Button onClick={() => addToCart(coffe)}>
                    <Plus weight="fill" />
                  </Button>
                </SelectQtyCafes>
                <CartButton
                  onClick={() => addToCart(coffe)}
                  title="Adicionar no carrinho"
                >
                  <ShoppingCart weight="fill" />
                </CartButton>
              </ButtonsFooter>
            </CoffeFooter>
          </Card>
        ))}
      </CardArea>
    </Container>
  )
}

export default CafesCard
