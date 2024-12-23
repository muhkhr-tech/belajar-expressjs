#### Menjalankan Database MySQL

Langkah-langkah:
1. Masuk ke directory /db
2. Jalankan command : docker build -t db:1.0.0 .
3. Jalankan command : docker run -it --rm -p 3333:3306 db:1.0.0
Note: jika port 3333 sudah digunakan maka ganti dengan port yang lain

#### Menjalankan Express
Langkah-langkah:
1. Masuk ke directory /be
2. Jalankan command : npm install
3. Jalankan command : npm start

#### Daftar Endpoints CRUD

## Get Dokter API

Endpoint : GET /doctors

Response Body Success :

```json
{
    "status": "success",
    "message": "Berhasil mendapatkan semua data dokter.",
    "data": [
        {
            "id" : 1,
            "nama": "Dr. John Doe",
            "spesialisasi": "Dermatologi",
            "nomor_hp": "6286547388377",
            "email": null,
            "alamat": "Jl. Krakatau 1 No. 24",
            "jadwal_praktek": "[{'hari': 'Senin', 'jam_mulai': '08:00', 'jam_selesai': '12:00'},{'hari': 'Rabu', 'jam_mulai': '13:00', 'jam_selesai': '17:00'}]",
            "status": "aktif",
            "createdAt": "2024-12-23T08:27:43.000Z",
            "updatedAt": "2024-12-23T08:27:43.000Z"
        },
    ]
}
```

## Create Dokter API

Endpoint : POST /doctors

Request Body :

```json
{
    "nama": "Dr. John Doe",
    "spesialisasi": "Dermatologi",
    "nomor_hp": "6286547388377",
    "email": null,
    "alamat": "Jl. Krakatau 1 No. 24",
    "jadwal_praktek": "[{'hari': 'Senin', 'jam_mulai': '08:00', 'jam_selesai': '12:00'},{'hari': 'Rabu', 'jam_mulai': '13:00', 'jam_selesai': '17:00'}]",
    "status": "aktif"
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Berhasil menambahkan data",
    "data": null
}
```

## Get Dokter by ID API

Endpoint : GET /doctors/:id

Response Body Success :

```json
{
    "status": "success",
    "message": "Berhasil mendapatkan data dokter",
    "data": {
        "id" : 1,
        "nama": "Dr. John Doe",
        "spesialisasi": "Dermatologi",
        "nomor_hp": "6286547388377",
        "email": null,
        "alamat": "Jl. Krakatau 1 No. 24",
        "jadwal_praktek": "[{'hari': 'Senin', 'jam_mulai': '08:00', 'jam_selesai': '12:00'},{'hari': 'Rabu', 'jam_mulai': '13:00', 'jam_selesai': '17:00'}]",
        "status": "aktif",
        "createdAt": "2024-12-23T08:27:43.000Z",
        "updatedAt": "2024-12-23T08:27:43.000Z"
    }
}
```

## Update Dokter API

Endpoint : PUT /doctors/:id

Request Body :

```json
{
    "nama": "Dr. Herman",
    "spesialisasi": "Patologi",
    "nomor_hp": "6286547388377",
    "email": null,
    "alamat": "Jl. Krakatau 1 No. 24",
    "jadwal_praktek": "[{'hari': 'Senin', 'jam_mulai': '08:00', 'jam_selesai': '12:00'},{'hari': 'Rabu', 'jam_mulai': '13:00', 'jam_selesai': '17:00'}]",
    "status": "aktif",
}
```

Response Body Success :

```json
{
    "status": "success",
    "message": "Berhasil mengubah data dokter",
    "data": null
}
```

## Delete Dokter API

Endpoint : DELETE /doctors/:id

Response Body Success :

```json
{
    "status": "success",
    "message": "Berhasil menghapus data dokter",
    "data": null
}
```