const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bukuRouter = require('./bukuRouter');

const app = express();

// Menggunakan middleware body-parser untuk mengurai body permintaan menjadi JSON
app.use(bodyParser.json());

// Menggunakan middleware cors untuk menangani CORS
app.use(cors());

// Menggunakan router buku
app.use('/buku-service', bukuRouter);

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Buku service is running on port ${PORT}`);
});
