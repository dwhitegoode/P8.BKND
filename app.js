import express from "express";
import db from "./db/connection.js"
import routes from "./routes/index.js"

const app = express()
const PORT = process.env.PORT || 9000

app.use(express.json())

app.use('/orgain-api', routes)

db.on('connected', () => {
  app.listen(PORT, console.log({ portno: PORT, date: new Date() }))
})