import express from 'express'
import { userRoute } from "./routes/user";
import { petRoute } from "./routes/pet";

const sample = express()

sample.use(express.json()) // for parsing application/json
sample.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const PORT = 9090
sample.listen(PORT, () => {
    console.log('listen at http://localhost:' + PORT)
})

// routes
sample.use('/user', userRoute)
sample.use('/pet', petRoute)