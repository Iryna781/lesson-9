type Props = {
    cartData: {
        totalCount: number
        totalPrice: number
    }
}
const CartHeader = ({ cartData }: Props) => {
    return (
        <>
            <div>{cartData.totalCount}</div>
            <div>$ {cartData.totalPrice}</div>
        </>
    )
}
export default CartHeader
