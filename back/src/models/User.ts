import { Model, DataTypes } from 'sequelize';
import sequelize from '../sequelize/Sequelize.service';

class User extends Model {
    public id!: number;
    public firstname!: string;
    public lastname!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public date_creation!: string;
    public bio!: string | null;
    public favorite_jdr!: string | null;
    public preference!: string | null;
    public profile_picture!: string | null;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    lastname: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    username: {
        type: DataTypes.STRING(250),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    date_creation: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    bio: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    favorite_jdr: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    preference: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    profile_picture: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'user'
});

export default User;
