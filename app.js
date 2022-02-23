const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })

app.use(express.json())

const router = require('./routes');
const res = require('express/lib/response');
app.use('/', router)

//Connecting to databse
mongoose.connect(process.env.DB_CONNECT_URL)
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open",  () => {
  console.log("Connected successfully to mongoDB");
});

//Server listening
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {console.log(`listening on ${PORT}`)}); 

