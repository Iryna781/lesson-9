import CartProductsList from 'components/CartProductsList/CartProductsList'
import CartTotal from 'components/CartTotal/CartTotal'
import productsArray, {
    getProductsObject,
    ProductsProps,
} from 'components/Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    console.log(productsInCart)
    return (
        <div>
            <CartProductsList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
