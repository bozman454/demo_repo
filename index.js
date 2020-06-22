const fetch = require('node-fetch');

fetch('http://localhost:9000/')
.then(res => res.json())
.then(data => console.log(data))





