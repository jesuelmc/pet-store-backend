import { Router } from "express";
import { User } from "../models";

const userRoute = Router()

userRoute.get('/login', async(req, res) => {
    try {
        const userFound = await User.findOne({
            where: {
                username: req.body.username
            }
        })
        if (userFound) {
            if (userFound.password == req.body.password)
                res.status(200).json({ msg: 'successful operation' })
            else
                res.status(400).json({ msg: 'invalid user name or password' })
        } else {
            res.status(400).json({ msg: 'invalid user name or password' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.get('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const userFound = await User.findByPk(id)
        if (userFound)
            res.status(200).json(userFound)
        else
            res.status(404).json({ msg: 'user not found' })
    } catch (error) {
        console.warm(error);
        res.status(500).json(error)
    }
})

userRoute.post('/', async(req, res) => {
    try {
        const userCreated = await User.create(req.body)
        if (userCreated) {
            res.status(201).json(userCreated)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.post('/createWithArray', async(req, res) => {
    try {
        var usersCreated = []
        req.body.forEach(async(user) => {

            const userCreated = await User.create(user);
            await users.push(userCreated)
        })
        if (usersCreated)
            res.status(200).json(usersCreated)

    } catch (error) {
        res.status(500).json(error)
    }
})

userRoute.put('/:username', async(req, res) => {
    const username = req.params.username
    try {
        const userFound = await User.findOne({
            where: {
                username: username,
            }
        })
        if (userFound) {
            const userUpdated = await userFound.update(req.body)
            res.status(200).json(userUpdated)
        } else {
            res.status(404).json({ msg: 'user not found' })
        }
    } catch (error) {
        console.warn(error);
        res.status(500).json(error)
    }
})

userRoute.delete('/:username', async(req, res) => {
    const username = req.params.username
    try {
        const userFound = await User.findOne({
            where: {
                username: username
            }
        })
        if (userFound) {
            const userDeleted = await userFound.destroy()
            res.status(200).json(userDeleted)
        } else {
            res.status(404).json({ msg: 'user not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
export { userRoute }