import db from "../db/connection.js"
import OrganModel from "../models/organs.js"
import organs from "./data.json" assert {type: 'json'}


const seedData = async () => {
  await db.dropDatabase()

  await OrganModel.insert(organs)
  console.log('seeded, success!')
  db.close()
}