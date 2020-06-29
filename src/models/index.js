import Sequelize from 'sequelize'
import PetModel from "./pet";
import UserModel from "./user";
import CategoryModel from './category'
import TagModel from './tag'

const db = new Sequelize('pet-store', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const Pet = PetModel('Pet', db)
const User = UserModel('User', db)
const Category = CategoryModel('Category', db)
const Tag = TagModel('Tag', db)
export { Pet, User }
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