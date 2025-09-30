import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { mainContext, type MainProviderProps } from "../../context/MainProvider"
import CardItem from "../../components/cardItem/CardItem"

export default function CardList() {
  const { linkParam } = useParams<string>()

  const { items, setLink } = useContext(mainContext) as MainProviderProps

  console.log(items)

  useEffect(() => {
    setLink(linkParam)
  }, [linkParam])

  console.log(linkParam)

  return (
    <>
      <h2>{linkParam?.toLocaleUpperCase()} Liste</h2>
      <div>
        {items.map((item: any, index) => {
          return (
            <div key={index}>
              <CardItem item={item} link={linkParam || ""} />
            </div>
          )
        })}
      </div>
    </>
  )
}
