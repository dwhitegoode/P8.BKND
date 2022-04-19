import app from './app.js'
import db from "./db/connection.js"

const PORT = process.env.PORT || 9000

db.on('connected', () => {
  app.listen(PORT, console.log({ portno: PORT, date: new Date() }))
})