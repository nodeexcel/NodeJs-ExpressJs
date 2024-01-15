const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const port = 3000;
app.use(express.json());
connectDB();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});