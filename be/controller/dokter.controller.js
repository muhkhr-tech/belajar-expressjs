const { where } = require('sequelize')
const Dokter = require('../model/dokter.model')
const sequelize = require('../model/db')
const JadwalDokterHari = require('../model/jadwal_dokter_hari.model')
const JadwalDokterTanggal = require('../model/jadwal_dokter_tanggal.model')

async function get(req, res) {
    const data = await Dokter.findAll()
    
    res.json({
        'message': 'Berhasil mendapatkan semua data dokter.',
        'status': 'success',
        'data': data
      })
}

async function create(req, res) {
    await Dokter.create(req.body)

    res.json({
        'status': 'success',
        'message': 'Berhasil menambah data',
        'data': null
    })
}

async function detail(req, res) {
    const data = await Dokter.findOne({where: {
        id: req.params.id
    }})

    res.json({
        'status': 'success',
        'message': `Berhasil mendapatkan data dokter ${data.nama}`,
        'data': data
    })
}

async function edit(req, res) {
    const data = await Dokter.update(
        req.body
    ,{where: {
        id: req.params.id
    }})

    res.json({
        'status': 'success',
        'message': `Berhasil mengubah data dokter`,
        'data': null
    })
}

async function remove(req, res) {
    const dokterId = req.params.id

    const transaction = await sequelize.transaction()

    try {
        await Dokter.destroy({
            where: {
                id: dokterId
            }, 
            transaction
        })

        await JadwalDokterHari.destroy({
            where: {
                dokterId: dokterId
            },
            transaction
        })

        await JadwalDokterTanggal.destroy({
            where: {
                dokterId: dokterId
            },
            transaction
        })

        await transaction.commit()
        res.json({
            'status': 'success',
            'message': `Berhasil menghapus data dokter`,
            'data': null
        })
    } catch (error) {
        await transaction.rollback()
        res.status(500).json({
            'status': 'failed',
            'message': `Gagal menghapus data`,
            'data': null
        })
    }
}

module.exports = {
    get,
    create,
    detail,
    edit,
    remove
}