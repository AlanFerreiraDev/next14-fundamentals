'use client'

import { AddToCartButton } from './add-to-cart-button'
import Test from './test'

interface IProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: IProductProps) {
  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton>
        <Test />
      </AddToCartButton>
    </div>
  )
}
