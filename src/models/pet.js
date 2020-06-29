import { DataTypes } from 'sequelize'


const fields = {
    name: {
        type: DataTypes.STRING(20),
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id'
        }
    },
    tagId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tag',
            key: 'id'
        }
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