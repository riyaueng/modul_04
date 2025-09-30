import type { ICustomer } from "../interfaces/ICustomers"
import supabase from "../utils/supabase"

export async function getCustomers_list(): Promise<ICustomer[]> {
  const { data: customers, error } = await supabase.from("customers").select("*")
  if (error) {
    console.error(error)
  }
  console.log(customers)
  return customers as ICustomer[]
}

// ? Alle Dateneinträge anzeigen lassen
// const { data: customers, error } = await supabase.from("customers").select("*")

// ? Filter nach bestimmten Begriff aus der Spalte
// const { data: customers, error } = await supabase.from("customers").select("*").eq("city", "Venice")

// ? Filter außer ausgewählter Begriff aus der Spalte
// const { data: customers, error } = await supabase.from("customers").select("*").neq("city", "Dublin")

// ? Filter nach bestimmten Begriff oder ID höher als angegeben
// const { data: customers, error } = await supabase.from("customers").select("*").or("country.eq.Germany, id.gt.13")

// ? Filter in Spalte nach Zeichen und in einer ID-Spanne
// const { data: customers, error } = await supabase
//   .from("customers")
//   .select("*")
//   .ilike("name", "%l%")
//   .between("id", 15, 20)

// ? Filter in Spalte nach Zeichen und in einer ID-Spanne
// const { data: customers, error } = await supabase
//   .from("customers")
//   .select("*")
//   .ilike("name", "%l%")
//   .gte("id", 15)
//   .lte("id", 20)

// ? Mehrer Filter in Spalte nach Zeichen
// const { data: customers, error } = await supabase
//   .from("customers")
//   .select("*")
//   .filter("address", "ilike", "5")
//   .filter("postalcode", "ilike", "%3%")

// ? In einer bestimmten Spalte nach Zeichen filtern
// const { data: customers, error } = await supabase.from("customers").select("name").ilike("postalcode", "%3%")

// ? Nur in einer bestimmten Spalte nach Zeichen filtern und nur diese anzeigen lassen
// const { data: customers, error } = await supabase.from("customers").select("*").textSearch("postalcode", "356")

// ? In einer bestimmten Spalte nach Gemeinsamkeiten filtern
// const { data: customers, error } = await supabase.from("customers").select("*").in("postalcode", ["2000", "8001"])
