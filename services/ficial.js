const faker = require('faker');

const Types = {
    FULL_NAME: '{{name.lastName}} {{name.firstName}}',
    LAST_NAME: '{{name.lastName}}',
    FIRST_NAME: '{{name.firstName}}',
    NAME_SUFFIX: '{{name.suffix}}',
    ADDRESS: 'address',
    COMPANY: 'company',
    DATE: 'date',
    FINANCE: 'finnace',

}

class Ficial {
    static get Types () {
        return Types;
    }

    static generate(type) {
        return faker.fake(type);
    }
}

module.exports = Ficial;
