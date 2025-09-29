import express from "express"

// Diese App-Variable ist wie ein virtueller Server, natürlich nur lokal auf dem Rechner

const app = express()

const PORT = 3000

const users_DatenBank = [
  {
    id: 1,
    name: "John",
    city: "Hamburg",
    age: 20,
  },
  {
    id: 2,
    name: "Hannah",
    city: "Berlin",
    age: 20,
  },
  {
    id: 3,
    name: "Joe",
    city: "Berlin",
    age: 30,
  },
]

const cities = [
  {
    id: 1,
    name: "Hamburg",
  },

  {
    id: 2,
    name: "Berlin",
  },
  {
    id: 3,
    name: "Wien",
  },
]

// app.get ist eine GET Methode mit zwei Parametern
// 1. Parameter ist der Route und der 2. eine Callback-Funktion
// Die Callback-Funktion hat selebr wieder zwei Paramter (req, res)

app.get("/users", (req, res) => {
  // ? Der Browser kann nur mit JSON-Daten umgehen!
  res.json(users_DatenBank)
})

app.get("/cities", (req, res) => {
  res.json(cities)
})

app.listen(PORT, () => {
  console.log("Server ist am Laufen auf LocalHost" + PORT)
})
