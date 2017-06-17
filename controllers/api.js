const co = require('coroutinify');
const Ficial = require('../services/ficial');
const dummy = require('dummy-json');

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
        //app.get('/api/:type([\\w]+)', this.getType);
        app.get('/api/template', this.generateTemplate);
        app.get('/api/item', this.generateItem);
        app.get('/api/array/:length([\\d]+)', this.generateArray);
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

    generateTemplate(req, res, next) {
        let json = dummy.parse(req.query.q);
        return res.json(JSON.parse(json));
    }

    generateItem(req, res, next) {
        let json = dummy.parse(JSON.stringify(req.query));
        return res.json(JSON.parse(json));
    }

    generateArray(req, res, next) {
        let template = `[
        {{#repeat ${req.params.length} }}
        ${JSON.stringify(req.query)}
        {{/repeat}}
        ]`        
        let json = dummy.parse(template);
        return res.json(JSON.parse(json));
    }
}

module.exports = new ApiController();
module.exports.ApiController = ApiController;
