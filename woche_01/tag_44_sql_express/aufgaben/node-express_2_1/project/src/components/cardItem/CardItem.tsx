import type { IPerson } from "../../interfaces/IPerson"
import type { IStarship } from "../../interfaces/IStarship"

interface CardItemProps<T> {
  item: T
  link: string
}

export default function CardItem<T>({ item, link }: CardItemProps<T>) {
  return (
    <div>
      {link === "people" && (
        <>
          <p>{(item as IPerson).id}</p>
          <h3>Name: {(item as IPerson).name}</h3>
        </>
      )}
      {link === "starships" && (
        <>
          <p>{(item as IStarship).id}</p>
          <h3>Name: {(item as IStarship).name}</h3>
        </>
      )}
    </div>
  )
}
