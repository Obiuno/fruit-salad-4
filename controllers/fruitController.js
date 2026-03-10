const FruitModel = require("../models/FruitModel")

const showAllFruits = async (req, res) => {
    try {
        const fruits = await FruitModel.showAllFruits()
        res.status(200).send(fruits)
    } catch(err) {
        res.status(500).send({error: err.message})
    }
}

const showFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit =  await FruitModel.showFruit(name)
        res.send(fruit)
    } catch(err) {
        res.status(404).send({error: err})
    }
}

const createFruit = async (req, res) => {
    try {
        const newFruit = await FruitModel.create(req.body)
        res.status(201).send(newFruit)
    } catch(err) {
        res.status(409)/send({error: err})
    }
}

const updateFruit = async (req, res) => {
    const name = req.params.name.toLowerCase()

    try {
        const fruit = await FruitModel.showFruit(name)
        const result = await fruit.update(req.body)

        res.status(200).send(result)
    } catch (err) {
        res.status(404).send({error: err.message})
    }
}

module.exports = {
    showAllFruits,
    showFruit,
    createFruit,
    updateFruit
}