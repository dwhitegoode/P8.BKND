import mongoose from "mongoose";

let OrganModel = new mongoose.Schema({
  "name": { type: String },
  "description": { type: String }
})

export default mongoose.model('organs', OrganModel)