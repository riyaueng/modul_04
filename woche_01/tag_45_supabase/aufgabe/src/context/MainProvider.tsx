import { createContext, useEffect, useState } from "react"
import type { ICustomer } from "../interfaces/ICustomers"
import { getCustomers_list } from "../functions/getCustomers"

export interface mainContextProps {
  customers: ICustomer[]
}

// eslint-disable-next-line react-refresh/only-export-components
export const mainContext = createContext<mainContextProps | null>(null)

export default function MainProvider({ children }: { children: React.ReactNode }) {
  const [customers, setCustomers] = useState<ICustomer[]>([])

  useEffect(() => {
    async function getCustomerData() {
      const customerFunc = await getCustomers_list()
      setCustomers(customerFunc)
    }
    getCustomerData()
  }, [])

  return <mainContext.Provider value={{ customers }}>{children}</mainContext.Provider>
}
