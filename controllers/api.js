const co = require('coroutinify');
const Ficial = require('../services/ficial');

class ApiController {
    constructor () {
        return co(this);
    }

    /**
     * route - main function for start route handling
     *
     * @param  {type} app Express application instance which should be routed
     */
    route (app) {
        this.app = app;

        app.get('/api/test', this.test);
        app.get('/api/:type([\\w]+)', this.getType);
    }

    getType (req, res, next) {
        let text;
        switch(req.params.type) {
            case 'name':
                text = Ficial.generate(Ficial.Types.FULL_NAME);
                break;
            case 'address':
                text = Ficial.generate(Ficial.Types.FULL_NAME);
                break;
            default:
                text = "No word found";
        }
        res.send(text);
    }

    test (req, res, next) {
        res.send('<h1>Testing<h1>');
    }
}

module.exports = new ApiController();
module.exports.ApiController = ApiController;
