import { DataTypes } from 'sequelize'

const fields = {
    username: {
        type: DataTypes.STRING(20),
    },
    firstName: {
        type: DataTypes.STRING(20),
    },
    lastName: {
        type: DataTypes.STRING(20),
    },
    email: {
        type: DataTypes.STRING(20),
    },
    password: {
        type: DataTypes.STRING(20),
    },
    phone: {
        type: DataTypes.STRING(20),
    },
    userStatus: {
        type: DataTypes.INTEGER
    }
}

const table = {
    tableName: 'user'
}

export default (name, sequelize) => {
    return sequelize.define(name, fields, table)
}