import mongoose from "mongoose";

let FoodModel = new mongoose.Schema({
  "name": { type: String },
  "foods": [{ type: Object }]
})
export default mongoose.model('foods', FoodModel)