import type { IProduct } from "../interfaces/IProducts"
import supabase from "../utils/supabase"

export async function getProduct_store(): Promise<IProduct[]> {
  const { data: products, error } = await supabase.from("products").select("*").textSearch("title", "laptop | maus")
  if (error) {
    console.error(error)
  }
  return products as IProduct[]
}

// # selectQueries Filter Supabase Methoden

// Filtern mit eq(), lt(), gt() ilike(), between(), in(), or()
// lt => lower than
// gt => greater than

// ? 1 = SQL Code
// SELECT * FROM products WHERE quality = "High"

// ? 1.1 = REACT Code
// const { data, error } = await supabase.from("products").select("*").eq("quality", "High")

// ? 1.1 = React Code
// const { data: product, error } = await supabase.from("products").select("*").neq("quality", "Low")

// ? 2 = SQL Code
// SELECT * FROM products WHERE quality = "High" AND price < 500

// ? 2.1 = REACT Code
// const {data: products, error} = await supabase.from("products").select("*").eq("quality", "High").lt("price", 500)

// ? 3 = SQL Code
// SELECT * FROM products WHERE price >= 50 AND price <= 200

// ? 3.1 = REACT Code
// const { data: products, error } = await supabase
//   .from("products")
//   .select("*")
//   .eq("quality", "High")
//   .gte("price", 50)
//   .lte("price", 200)

// ? 3.2 = REACT Code (Alternative)
// const { data: products, error } = await supabase.from("products").select("*")
// .between("price", 50, 200)

// ? 4 = SQL Code
// SELECT * FROM products WHERE quality IN ("High", "Medium")

// ? 4.1 = REACT Code
// const { data: products, error } = await supabase.from("products").select("*")
// .in("quality", ["High", "Medium"])

// ? 5 = SQL Code
// SELECT * FROM products WHERE quality = "High" OR price < 50

// ? 5.1 = REACT Code
// const { data: products, error } = await supabase.from("products").select("*")
// .or("quality.eq.High, price.lt.50")

// ? 6 = SQL Code
// SELECT * FROM products WHERE price >= 50 quality = "High"

// ? 6.1 = REACT Code
// const { data: products, error } = await supabase.from("products").select("*")
// .filter("price", "gte", 50)
// .filter("quality", "eq", "High")

// ? 7 = SQL Code
// SELECT * FROM products WHERE title LIKE "%laptop%"

// ? 7.1 = REACT Code
// const { data: products, error } = await supabase.from("products").select("*")
// .ilike("title", "%laptop%")

// ? 8 = REACT Code
// const { data: products, error } = await supabase.from("products").select("title", "price").eq("price", "High")

// ? 9 = REACT Code
// const { data: products, error } = await supabase.from("products").select("*").textSearch("title", "laptop | maus")
