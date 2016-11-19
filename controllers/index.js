const apiController = require('./api');

//Dispacth all controllers
module.exports = (app) => {
    apiController.route(app);
}
