const { DataTypes } = require('sequelize')
const sequelize = require('./db')

const Dokter = sequelize.define("dokter", {
   nama: {
     type: DataTypes.STRING,
     allowNull: false
   },
   spesialisasi: {
     type: DataTypes.STRING,
     allowNull: false
   },
   nomor_hp: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
   },alamat: {
    type: DataTypes.TEXT,
  },jadwal_praktek: {
    type: DataTypes.STRING,
  },status: {
    type: DataTypes.ENUM('aktif', 'tidak aktif'),
  }
});

sequelize.sync().then(() => {
  console.log('Dokter table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});