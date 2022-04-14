import Food from "../models/foods.js"

export const getFood = async (req, res) => {
  try {
    const food = await Food.find({})
    res.json(food)
  } catch (err) {
    console.log(err)
    res.json({ error: err.message })
  }
}
