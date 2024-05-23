'use client'

import { useCart } from '@/contexts/cart-context'

export interface AddToCardButtonProps {
  productId: number
}

export function AddToCardButton({ productId }: AddToCardButtonProps) {
  const { addToCard } = useCart()

  function handleAddProductToCart() {
    addToCard(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProductToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold"
    >
      Adicionar ao carrinho
    </button>
  )
}
