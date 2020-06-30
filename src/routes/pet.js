import { Router } from "express";
import { Pet } from "../models";

const petRoute = Router()

petRoute.post('/', async(req, res) => {
    try {
        const petCreated = await Pet.create(req.body)
        if (petCreated) {
            res.status(201).json(petCreated)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

export { petRoute }