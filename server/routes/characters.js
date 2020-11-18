const express = require('express')
const Character = require('../models/character')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const characters = await Character.find()
    res.json(characters)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  const character = new Character({
    name: req.body.name,
    profession: req.body.profession
  })
  try {
    const newCharacter = await character.save()
    res.status(201).json(newCharacter)
  } catch (error) {
    res.status(400).json({ message: err.message })
  }
})

module.exports = router