const express = require('express');
const app = express();
const port = 3000
const path = require('path'), async = require('async'), fs = require('fs')

const users = [
    {name: 'kim', email: 'kim@email.com'},
    {name: 'lee', email: 'lee@email.com'},
    {name: 'park', email: 'park@email.com'},
]

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

// app.get('/greet',(req, res) => {
//     res.send(JSON.stringify({message: "안녕하세요!!!"}));
// })

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(port, () => {
    console.log(`서버 실행! http://localhost:${port}`)
})



