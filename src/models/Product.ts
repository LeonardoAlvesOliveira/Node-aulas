import { it } from "node:test"

type Product = {
  title: string,
  price: number
}
const data: Product[] = [
  { title: 'ovo', price: 10 },
  { title: 'leite', price: 24 },
  { title: 'nescau', price: 12 },
  { title: 'bala', price: 5 }
]

export const Product = {
  getAll: (): Product[] => {
    return data
  },

  getPriceAfter: (price: number): Product[] => {
    return data.filter(item => item.price >= price)
  }
}
