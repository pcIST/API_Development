const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const port = process.env.PORT || 80

// connect mongoDB
// mongodb://<dbuser>:<dbpassword>@<dbhost>:<dbport>/<dbname>
const dbuser = "pcist"
const password = "telbechbo00"
const dbhost = "ds237363.mlab.com"
const dbport = 37363
const dbname = "pcist-shop"

mongoose.connect(`mongodb://${dbuser}:${password}@${dbhost}:${dbport}/${dbname}`)

// Using body-parser npm package to parse request body
app.use(bodyParser.json())

const profile_router = require('./router/site')
const product_router = require('./router/product')

app.use('/profile', profile_router)
app.use('/product', product_router)

// healthcheck
app.get('/', (req, res) =>
    res.send('Health ok!')
)

app.listen(port, () =>
    console.log(`Our app listening on port ${port}!`)
)
