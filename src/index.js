import express from 'express'
import { userRoute } from "./routes/user";

const sample = express()

sample.use(express.json()) // for parsing application/json
sample.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const array = [
    "string",
    false,
    {
        sub_id: 5
    }
]

sample.get('/hello', (req, res) => {
    res.status(200).json({
        msg: 'world'
    })
})

const PORT = 9090
sample.listen(PORT, () => {
    console.log('listen at http://localhost:' + PORT)
})

// routes
sample.use('/user', userRoute)