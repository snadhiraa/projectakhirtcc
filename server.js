const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve the main HTML file
app.get('', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Frontend service is running on port ${PORT}`);
});
