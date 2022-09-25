const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const routes = require('./routes/index')
require('dotenv').config()


const app = express()
const port = process.env.PORT || 9000;

app.use(express.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
});

app.use('/api', routes)


// Conexion a la base de datos (atlas)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('successful connection to mongodb atlas'))
  .catch((error) => console.log(error))


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`)
})
