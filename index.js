const express = require('express')
const app = express()
const port = 3001

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
