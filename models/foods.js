import mongoose from "mongoose";

let FoodModel = new mongoose.Schema({
  "name": { type: String },
  "food": { type: Object }
})
export default mongoose.model('foods', FoodModel)