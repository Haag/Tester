const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(helmet())
server.use(cors())
server.use(bodyParser.json())
server.use(morgan('combined'))

const DB = [
    {
        id: 1,
        name: "Kyle",
        notes: "Likes to eat, drink, and sleep",
    },
    {
        id: 2,
        name: "John",
        notes: "Likes to eat, drink, and sleep",
    }
]


server.get('/', (req, res) => {
    const data = DB.map(data => 
        ({
        id: data.id,
        name: data.name,
        notes: data.notes,
        })
    )
        res
        .status(200)
        .send(data)
})

server.get('/:id', (req, res) => {
    const data = DB.filter(data => (data.id === parseInt(req.params.id)))
    if(data.length > 1) return res.status(500).send({msg: "Something went terribly wrong on the server's end"})
    if(data.length === 0) return res.status(404).send({msg: "That location doesn't seem to exist"})
    if(data.length < 1) return res.status(500).send({msg: "Something went terribly wrong on the server's end"})
    res.send(data[0])
})


server.post('/', (req, res) => {
    const {name, notes} = req.body
    const newPerson = {
        id: DB.length + 1,
        name,
        notes,
    }
    DB.push(newPerson)
    res.status(201)
    res.send(newPerson)

})



server.listen(5050, () => {console.log('listening on port 5050')})