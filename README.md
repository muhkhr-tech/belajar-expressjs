#### Menjalankan Database MySQL

Langkah-langkah:
1. Masuk ke directory /db
2. Jalankan command : docker build -t db:1.0.0 .
3. Jalankan command : docker run -it --rm -p 3333:3306 db:1.0.0