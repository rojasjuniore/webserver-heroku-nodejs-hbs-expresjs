const express = require('express')
const app = express()
const hbs = require('hbs');


const port = process.env.PORT || 3000; 


hbs.registerPartials(__dirname + '/views/partial')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        name: "junior rojas",
        anio: new Date().getFullYear()
    })
})


app.get('/enterprise', (req, res) => {
    res.render('enterprise', {
        name: "junior rojas",
        anio: new Date().getFullYear()
    })
})

app.listen(port, () => {
    console.log(`escuchando peticiones el puerto  ${port}`)
})