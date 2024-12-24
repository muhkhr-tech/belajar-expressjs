const { DataTypes } = require('sequelize')
const sequelize = require('./db');
const JadwalDokterHari = require('./jadwal_dokter_hari.model');
const Dokter = require('./dokter.model');

const JadwalDokterTanggal = sequelize.define("jadwal_dokter_tanggal", {
   tanggal: {
     type: DataTypes.DATE,
     allowNull: false
   },
   dokterId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kode: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
});

sequelize.sync().then(async() => {
  console.log('Jadwal Dokter Hari table created successfully!');
  // const tanggal_mulai = new Date(`2025-1-1`)
  // const tanggal_berakhir = new Date(`2025-1-30`);

  // const jadwal = await JadwalDokterHari.findAll({
  //   attributes: ['kode_hari']
  // }, {where: {
  //   dokterId: 1
  // }})
  // const hari = jadwal.map((kode) => kode.kode_hari)
  // console.log(hari)
  
  // const arr = []
  // while (tanggal_mulai <= tanggal_berakhir) {
  //   console.log(tanggal_mulai, tanggal_mulai.getDay())
  //   if (hari.includes(tanggal_mulai.getDay())) {
  //     arr.push(new Date(tanggal_mulai))
  //   }
  //   tanggal_mulai.setDate(tanggal_mulai.getDate()+1)
  // }
  // console.log(arr)
  // JadwalDokterHari.bulkCreate()
}).catch((error) => {
  console.error('Unable to create table : ', error);
});

module.exports = JadwalDokterTanggal;