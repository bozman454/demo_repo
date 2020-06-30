const fetch = require('node-fetch')

        // enter your API url here
fetch('http://localhost:9000/api/demo')
.then(res => res.json())

        // send response
.then(data => console.log(data))