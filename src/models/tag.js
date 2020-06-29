import { DataTypes } from 'sequelize'

const fields = {
    name: {
        type: DataTypes.STRING(40),
    }
}

const table = {
    tableName: 'tag'
}

export default (name, sequelize) => {
    return sequelize.define(name, fields, table)
}