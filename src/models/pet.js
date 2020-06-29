import { DataTypes } from 'sequelize'

const fields = {
    name: {
        type: DataTypes.STRING(20),
    },
    status: {
        type: DataTypes.STRING(20),
    }
}

const table = {
    tableName: 'pet'
}

export default (name, sequelize) => {
    return sequelize.define(name, fields, table)
}