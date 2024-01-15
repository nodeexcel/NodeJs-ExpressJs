const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const {globalErrorHandler}=require("./middleware/errorHandler")
const port = 3000;
app.use(express.json());
app.use(globalErrorHandler);
connectDB();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});