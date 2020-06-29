import Sequelize from 'sequelize'
import PetModel from "./pet";

const db = new Sequelize('pet-store', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Pet = PetModel('Pet', db)

export { Pet }
const syncDB = async() => {
    try {
        await db.authenticate()
        console.log('DB connection: test ok')

        await db.sync({ alter: true }) // !!warning exist { alter: true } !! warning exist { alter: true }
        console.log('DB connection: sync ok')
    } catch (e) {
        console.error(e)
    }

}
syncDB()