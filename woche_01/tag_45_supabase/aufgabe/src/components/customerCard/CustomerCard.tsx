import type { ICustomer } from "../../interfaces/ICustomers"
import "./CustomerCard.css"

interface CustomerCardProps {
  customer: ICustomer
}

export default function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <div key={customer.id} className="customer_card">
      <h3>{customer.name}</h3>
      <p>ID: {customer.id}</p>
      <p>Address: {customer.address}</p>
      <p>City: {customer.city}</p>
      <p>Postalcode: {customer.postalcode}</p>
      <p>Country: {customer.country}</p>
    </div>
  )
}
