const express = require('express');
const bp = require('body-parser');


//const fs = require('fs');
const app = express();


app.use(bp())

// good habit to start now, setting up config files in the root of the repo
// const configz = JSON.parse(fs.readFileSync('./config.json', 'utf-8'))
const PORT = 9000





app.get('/api/demo',  function (request, response)  {

    //put your API data here and send in response
    response.status(200).send({ message: 'hello world' })
})




app.post('/api/sendstuff/:id', (req, res) => {
    
    console.log(req)
    if (req.params.id) {
        console.log(`request recieved, printing params now...`)
        console.log(req.params.id)
        res.status(200).send({message: 'request recieved'});
    }
    else
        res.status(500).send({message: 'error: was expecting a message body'})
})




app.listen(PORT, () => console.log(`server is up at port ${PORT}`))



























































