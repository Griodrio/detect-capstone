const express = require('express')
const dotenv = require('dotenv')
const routes = require('./routes')
dotenv.config()
const App = express()

App.use(express.json())
App.use(routes)

App.listen(process.env.PORT, console.log(`Server is running at port ${process.env.PORT}`))