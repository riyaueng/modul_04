import { useContext } from "react"
import { mainContext, type mainContextProps } from "../../context/MainProvider"
import type { IProduct } from "../../interfaces/IProducts"

export default function Home() {
  const { products } = useContext(mainContext) as mainContextProps

  console.log(products)

  return (
    <div>
      {products.map((product: IProduct, index: number) => {
        return (
          <>
            <div key={index}>
              <h4>Title: {product.title}</h4>
            </div>
          </>
        )
      })}
    </div>
  )
}
