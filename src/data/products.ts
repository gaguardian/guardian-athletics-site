export type ProductCategory = {
  title: string
  subtitle: string
}

export type Product = {
  name: string
  category: string
  price: string
  rating: string
  reviews: number
}

export const productCategories: ProductCategory[] = [
  { title: 'Apparel', subtitle: 'Tees, hoodies, and training layers.' },
  { title: 'Accessories', subtitle: 'Everyday essentials with Guardian identity.' },
  { title: 'Training Gear', subtitle: 'Useful gear built for the work.' },
  { title: 'Nutrition', subtitle: 'Fuel and hydration essentials.' },
]

export const featuredProducts: Product[] = [
  { name: 'Purpose Tee', category: 'Apparel', price: '$32.00', rating: '★★★★★', reviews: 48 },
  { name: 'Classic Hoodie', category: 'Apparel', price: '$60.00', rating: '★★★★★', reviews: 72 },
  { name: 'Guardian Snapback', category: 'Accessories', price: '$28.00', rating: '★★★★☆', reviews: 36 },
  { name: 'Lifting Belt', category: 'Training Gear', price: '$75.00', rating: '★★★★☆', reviews: 19 },
  { name: 'Guardian Shaker', category: 'Nutrition', price: '$24.00', rating: '★★★★★', reviews: 27 },
]
