const express = require('express')
const routes = require('./routes')





const app = express()
const port = 3000


// Site Estatico HTML
// app.use('/', express.static(__dirname + '/public'));

// Body Parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Rotas dinamicas nodejs
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})