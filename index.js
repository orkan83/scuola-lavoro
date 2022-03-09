const express = require('express');
const app = express();
const port = 3000;

const data = require("./data.json");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/infos/:day', (req, res) => {
    const day = req.params.day;
    let result = {
        status: false,
        message: '',
    };
    if(data[day]){
        let trashMessage = "Oggi si butt"
        console.log(data[day]);
        console.log(data[day].length);
        if(data[day].length === 1){
            trashMessage += 'a '
        } else {
            trashMessage += 'ano '
        }
        trashMessage += data[day].join(' e ');
        result.status = true;
        result.message = trashMessage;
    } else {
        result.message = "giorno non valido";
    }
    res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});