const express = require('express');
const app = express();
// const mongoose = require('mongoose'); 
const routes = require('./routes/routes');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
// const uri = `mongodb://localhost:27017/auth`;
const UserRouter = require("./routes/userRoutes");

const dotenv = require("dotenv").config();
connectDB();
// mongoose.connect(uri);

// const db = mongoose.connection;
// db.once("open", () => {
//     console.log("Connection Successful");
// });


const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", routes);
app.use("/api/users", UserRouter);
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
