const express = require('express');
const bp = require('body-parser')
const fs = require('fs');


const app = express();


app.use(
    bp()
    )

// good habit to start now, setting up config files in the root of the repo
const configz = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = configz.PORT;


app.post('/api/sendstuff/', (req, res) => {
    if (req.body) {
        console.log(`request recieved, printing now...`)
        console.log(req.body)
        res.status(200).send({message: 'request recieved'});
    }
    else
        res.status(500).send({message: 'error: was expecting a message body'})
})



app.get('/api/demo',(request, response) => {
    response.status(200).send({ message: 'hello world' })
})



app.listen(PORT, () => console.log(`server is up at port ${PORT}`))















































