const { Client } = require('pg')
const client = new Client({
        host: '192.168.86.246',
        port: 5432,
        user: 'root',
        password: 'root',
        database: 'test_db',
    })
client.connect()
client.query('SELECT * from demo_table', (err, res) => {
        if(err) throw err;
        else {
                console.log(res.rows)
        }
        client.end()
})