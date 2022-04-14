import db from "../db/connection.js"
import OrganModel from "../models/organs.js"
import FoodModel from "../models/foods.js"
import organs from "./data.json" assert {type: 'json'}
import foods from "./datafruits.json" assert { type: 'json'}


const seedData = async () => {
  await db.deleteMany()

  await OrganModel.insertMany(organs)
  console.log('seeded, success!')
  db.close()
}

seedData();

const seedFoodData = async () => {
  await db.deleteMany()

  await FoodModel.insertMany(foods)
  console.log('food seeded!')
  db.close()
}

seedFoodData()