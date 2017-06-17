const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const controllers = require('./controllers');

//Create main Express application
const app = express();

//Add serving static files from .public folder
app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Configure all controllers
controllers(app);

//Start Web Server
app.listen(config.port, config.ip, () => {
    console.log(`Server listening ${config.ip}:${config.port} . . .`);
});
