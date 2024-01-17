export interface Cart {
    items: Array<CartModel>
}
export interface CartModel {
    id: number,
    product: string,
    name: string,
    price: number,
    quantity: number
}