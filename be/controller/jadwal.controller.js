const { where } = require('sequelize')
const Dokter = require('../model/dokter.model')
const JadwalDokter = require('../model/jadwal_dokter_tanggal.model')
const JadwalDokterHari = require('../model/jadwal_dokter_hari.model')

const kodeHari = {
    senin: 2,
    selasa: 3,
    rabu: 4,
    kamis: 5,
    jumat: 6,
    sabtu: 0,
    minggu: 1,
  };

async function get(req, res) {
    const data = await Dokter.findAll()
    
    res.json({
        'message': 'Berhasil mendapatkan semua data dokter.',
        'status': 'success',
        'data': data
      })
}

async function create(req, res) {
    const { dokterId } = req.params
    const kode_hari = kodeHari[req.body.hari.toLowerCase()]
    const {hari, jam_mulai, jam_berakhir} = req.body

    const dokter = await Dokter.findOne({where: {
        id: dokterId
    }})

    await JadwalDokterHari.create({
        "kode_hari": kode_hari,
        "hari": hari,
        "dokterId": dokterId,
        "jam_mulai": jam_mulai,
        "jam_berakhir": jam_berakhir,
        "kode": `${dokterId}-${kode_hari}-${jam_mulai}`
    }, {
        updateOnDuplicate: ["kode"]
    })

    res.json({
        'status': 'success',
        'message': `Berhasil menambah jadwal dokter ${dokter.nama}`,
        'data': null
    })
}

async function generate(req, res) {
    const { dokterId } = req.params
    const [dokter, jadwal] = await Promise.all([
        Dokter.findOne({where: {
            id: dokterId
        }}),

        JadwalDokterHari.findAll({
            attributes: ['kode_hari']
        }, {where: {
            dokterId: dokterId
        }})
    ])
    

    const tanggalMulai = new Date(req.body.tanggal_mulai)
    const tanggalBerakhir = new Date(req.body.tanggal_berakhir);

    const hari = jadwal.map((kode) => kode.kode_hari)
  
    const dateGenerated = []
    while (tanggalMulai <= tanggalBerakhir) {
        
        if (hari.includes(tanggalMulai.getDay())) {
            dateGenerated.push({
                "tanggal": new Date(tanggalMulai),
                "dokterId": Number(dokterId),
                "kode": dokterId+'-'+new Date(tanggalMulai).toLocaleDateString("id-ID")
            })
        }

        tanggalMulai.setDate(tanggalMulai.getDate()+1)
    }
    
    await JadwalDokter.bulkCreate(dateGenerated,
        {
            updateOnDuplicate: ["kode"]
        }
    )

    res.json({
        'status': 'success',
        'message': `Berhasil mengenerate jadwal dokter ${dokter.nama} data`,
        'data': null
    })
}

module.exports = {
    get,
    create,
    generate
}