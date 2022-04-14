import res from "express/lib/response"
import organs from "../models/organs.js"
import Organ from "../models/organs.js"

export const getOrgans = async (req, res) => {
  try {
    const organs = await (await Organ.find({})).reverse.json(organs)
  } catch (err) {
    console.log(err)
    res.json(err.message)
  }
}