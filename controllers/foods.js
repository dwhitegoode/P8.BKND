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

export const updateFood = async (req, res) => {
  try {
    const query = { name: `${req.params.organ}` };
    const food = await Food.findOneAndUpdate(query, req.body)
    res.status(200).json(food)
  } catch (err) {
    console.log(err)
    res.json({ error: err.message })
  }
}

