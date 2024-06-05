const Buku = require('./bukuModel');

exports.getAllBuku = (req, res) => {
    Buku.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

exports.getBukuByKodeBuku = (req, res) => {
    const kode_buku = req.params.kode_buku;
    Buku.getByKodeBuku(kode_buku, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!results.length) {
            res.status(404).json({ message: 'Buku not found' });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

exports.addBuku = (req, res) => {
    const newBuku = req.body;
    Buku.add(newBuku, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Buku added successfully' });
        }
    });
};

exports.updateBuku = (req, res) => {
    const kode_buku = req.params.kode_buku;
    const updatedBuku = req.body;
    Buku.update(kode_buku, updatedBuku, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Buku not found' });
        } else {
            res.status(200).json({ message: 'Buku updated successfully' });
        }
    });
};

exports.deleteBuku = (req, res) => {
    const kode_buku = req.params.kode_buku;
    Buku.delete(kode_buku, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Buku not found' });
        } else {
            res.status(200).json({ message: 'Buku deleted successfully' });
        }
    });
};
