import { DataTypes } from 'sequelize';
import { db } from '../config/db.config';

const User = db.define('user', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  imgUser: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue:
      'https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg',
  },
  status: {
    allowNull: false,
    type: DataTypes.ENUM('active', 'disabled'),
    defaultValue: 'active',
  },
  role: {
    type: DataTypes.ENUM('user', 'admind'),
    allowNull: false,
    defaultValue: 'user',
  },
});

export { User };
