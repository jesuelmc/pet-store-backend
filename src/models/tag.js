import { DataTypes } from 'sequelize'

const fields = {
    name: {
        type: DataTypes.STRING(20),
    }
}

const table = {
    tableName: 'tag'
}

export default (name, sequelize) => {
    return sequelize.define(name, fields, table)
}