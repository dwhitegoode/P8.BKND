import mongoose from "mongoose";

let FoodModel = new mongoose.Schema({
  "name": { type: String },
  "food": { type: Array }
})
export default mongoose.model('foods', FoodModel)