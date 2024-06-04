import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize/Sequelize.service';

class Campaign extends Model {
    public id!: number;
    public name!: string;
    public id_jdr!: string;
    public id_mj!: string;
    public date_creation!: string;
    public status!: string;
}

Campaign.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    id_jdr: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    id_mj: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    date_creation: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

}, {
    sequelize,
    modelName: 'campaign'
});

export default Campaign;
