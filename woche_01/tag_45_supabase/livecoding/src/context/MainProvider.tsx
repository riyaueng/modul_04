import { createContext, useEffect, useState } from "react"
import type { IProduct } from "../interfaces/IProducts"
import { getProduct_store } from "../functions/getProducts"

export interface mainContextProps {
  products: IProduct[]
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<mainContextProps | null>(null)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function getData_In_useEffect() {
      const products_Variable_from_Func = await getProduct_store()
      setProducts(products_Variable_from_Func)
    }
    getData_In_useEffect()
  }, [])

  return <mainContext.Provider value={{ products }}>{children}</mainContext.Provider>
}
