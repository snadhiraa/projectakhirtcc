const express = require('express');
const router = express.Router();
const bukuController = require('./bukuController');

router.get('/buku', bukuController.getAllBuku);
router.get('/buku/:kode_buku', bukuController.getBukuByKodeBuku);
router.post('/buku', bukuController.addBuku);
router.put('/buku/:kode_buku', bukuController.updateBuku);
router.delete('/buku/:kode_buku', bukuController.deleteBuku);

module.exports = router;
