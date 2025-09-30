import { useContext } from "react"
import { mainContext, type mainContextProps } from "../../context/MainProvider"
import type { ICustomer } from "../../interfaces/ICustomers"
import "./Home.css"
import CustomerCard from "../../components/customerCard/CustomerCard"

export default function Home() {
  const { customers } = useContext(mainContext) as mainContextProps

  console.log(customers)
  return (
    <section className="customer_list">
      {customers.map((customer: ICustomer) => {
        return (
          <>
            <CustomerCard customer={customer} />
          </>
        )
      })}
    </section>
  )
}
