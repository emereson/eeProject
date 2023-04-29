import { DataTypes } from 'sequelize';
import { db } from '../config/db.config';

const Post = db.define('post', {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.ARRAY(DataTypes.ENUM('', 'disabled')),
  },
  postImg: {
    allowNull: false,
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
});

export { Post };
