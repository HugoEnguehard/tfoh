import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize/Sequelize.service';

class Jdr extends Model {
    public id!: number;
    public name!: string;
}

Jdr.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(250),
        allowNull: false
    },

}, {
    sequelize,
    modelName: 'jdr'
});

export default Jdr;
