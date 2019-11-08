const express = require("express");
const app = express();

app.get('/', (req, res) => {
    cityModel.find().then(data => { return (res.send(data)) })
    console.log('hola');
    //return res.send('hola')
})
app.listen(3001, () => console.log("server listen port 3001"));