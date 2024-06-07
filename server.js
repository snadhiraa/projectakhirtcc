const express = require('express');
const path = require('path');
const app = express();

app.get('', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Frontend service is running on port ${PORT}`);
});