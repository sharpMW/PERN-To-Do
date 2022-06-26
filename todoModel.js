module.exports = (sequelize, DataTypes)=>{
    const Todo = sequelize.define('todo', {
        todo_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        createdAt: false,
        updatedAt: false
    })
    return Todo
}