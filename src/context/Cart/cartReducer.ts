import { CartAction, CartState, Product } from './cartTypes'

export const cartReducer = (state: CartState, action: CartAction) => {
  const itemExists = state.cartItems.find(
    (item: Product) => item.id === action.payload.id,
  )
  switch (action.type) {
    case 'ADD_TO_CART':
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item: Product) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      }
    case 'DECREMENT':
      if (itemExists && itemExists.quantity === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item: Product) => item.id !== action.payload.id,
          ),
        }
      }
      return {
        ...state,
        cartItems: state.cartItems.map((item: Product) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      }

    default:
      return state
  }
}
