const express = require('express');
//create instance of express
const app = express();
app.get('/', (req, res) => res.send('Hello Lucas'));
app.listen(4000, () => console.log('Listening on port 4000!'));