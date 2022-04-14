import express from "express";
import db from "./db/connection.js"
import routes from "./routes/index.js"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use(cors())

app.use('/organ-api', routes)

db.on('connected', () => {
  app.listen(PORT, console.log({ portno: PORT, date: new Date() }))
})