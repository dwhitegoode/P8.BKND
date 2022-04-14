import mongoose from "mongoose";

let OrganModel = new mongoose.Schema({
  "name": { type: String },
  "description": { type: String },
  "system": { type: String },
  "symptom": { type: String }
})

export default mongoose.model('organs', OrganModel)