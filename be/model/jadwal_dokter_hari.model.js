const { DataTypes } = require('sequelize')
const sequelize = require('./db');

const JadwalDokterHari = sequelize.define("jadwal_dokter_hari", {
   kode_hari: {
     type: DataTypes.INTEGER,
     allowNull: false
   },
   hari: {
     type: DataTypes.STRING,
     allowNull: false
   },
   jam_mulai: {
     type: DataTypes.STRING,
     allowNull: false
   },
   jam_berakhir: {
     type: DataTypes.STRING,
   },
   dokterId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

sequelize.sync().then(() => {
  console.log('Jadwal Dokter Hari table created successfully!');
  // JadwalDokterHari.bulkCreate([
  //   {
  //       "dokterId": 1,
  //       "kode_hari": 1,
  //       "hari": "Senin",
  //       "jam_mulai": "10:00",
  //       "jam_berakhir": "15:00"
  //   },
  //   {
  //     "dokterId": 1,
  //     "kode_hari": 2,
  //     "hari": "Selasa",
  //     "jam_mulai": "11:00",
  //     "jam_berakhir": "16:00"
  //   }
  // ]
// )
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = JadwalDokterHari;