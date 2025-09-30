import { createContext, useEffect, useState } from "react"
import type { IPerson } from "../interfaces/IPerson"
import type { IStarship } from "../interfaces/IStarship"
import axios from "axios"

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<MainProviderProps | null>(null)

type DataType = IPerson | IStarship

export interface MainProviderProps {
  items: DataType[]
  setLink: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [link, setLink] = useState<string | undefined>("")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<any>([])

  useEffect(() => {
    const getData = async () => {
      let url = ""
      if (link) {
        if (link === "people") {
          url = "http://localhost:3000/people"
        } else if (link === "starships") {
          url = "http://localhost:3000/starships"
        }
        try {
          const resp = await axios.get(url)
          if (resp.data) {
            setItems(resp.data)
          }
        } catch (error) {
          console.error("Fehler beim Fetchen.", error)
        }
      }
    }
    getData()
  }, [link])

  return <mainContext.Provider value={{ items, setLink }}>{children}</mainContext.Provider>
}
