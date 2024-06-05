const db = require('./db');

class Buku {
    static getAll(callback) {
        db.query('SELECT * FROM buku', callback);
    }

    static getByKodeBuku(kode_buku, callback) {
        db.query('SELECT * FROM buku WHERE kode_buku = ?', [kode_buku], callback);
    }

    static add(buku, callback) {
        db.query('INSERT INTO buku (kode_buku, judul, stok) VALUES (?, ?, ?)', [buku.kode_buku, buku.judul, buku.stok], callback);
    }

    static update(kode_buku, buku, callback) {
        db.query('UPDATE buku SET judul = ?, stok = ? WHERE kode_buku = ?', [buku.judul, buku.stok, kode_buku], callback);
    }

    static delete(kode_buku, callback) {
        db.query('DELETE FROM buku WHERE kode_buku = ?', [kode_buku], callback);
    }
}

module.exports = Buku;
