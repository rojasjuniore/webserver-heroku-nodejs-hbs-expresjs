const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.write('hola mundo')
    res.write(JSON.stringify({ name: "junior" }))

    res.end()
}).listen(8080)

console.log('escuchando el puerto 8080')