'use strict';
const _ = require('lodash');

module.exports = function setup(options, imports, register) {
    const mongo = new imports.mongo();

    mongo.connect(options.mongo, function (err, mongoDb, schemas) {
        if (err) {
            console.log('Error initializing mongo.');
            return register(err);
        }
        console.log('Mongo initialized.');
        const sequelize = imports.sql(options.sql);

        const database = {
            sequelize,
            t: function (fn) {
                return sequelize.transaction(fn);
            },
            import: function (models) {
                if (typeof models === 'function') {
                    const DataTypes = sequelize.Sequelize;
                    models = models(sequelize, database, DataTypes);
                }
                _.each(models, (value, key) => {
                    database[key] = value;
                });
            },
            schemas,
            mongo: mongoDb
        };
        register(null, {
            database
        });
    });
};