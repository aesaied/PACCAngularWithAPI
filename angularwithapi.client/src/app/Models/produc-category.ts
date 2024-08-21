import { Product } from "./product"

export interface ProductCategory {

    pcId: number,
    name: string

    products: Product[] | null

}