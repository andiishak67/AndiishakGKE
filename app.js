'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Nama: Andi Ishak')
    res.send('Nim: 51021801')
    res.send('Sistem Informasi')
}

)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
