'use strict';

let log    = require('./log');
let format = require('util').format;
let mongo  = require('mongodb').MongoClient;

let config = require('./config/config')(process.env.NODE_ENV || 'dev');

//collections
let collections = ['contact', 'team', 'tournaments', 'events', 'users'];

class Mongo{
    static init(){
        Mongo.mongoDomain = 'mongodb://';
        Mongo.mongoUser = process.env.MongoUser;
        Mongo.mongoPwd = process.env.MongoPwd;
        Mongo.mongoHost = process.env.MongoHost || 'localhost/RCSwebsite';
        Mongo.mongoAuth = Mongo.mongoUser && Mongo.mongoPwd ? format("%s:%s@", Mongo.mongoUser, Mongo.mongoPwd) : '';
        Mongo.mongoUrl = format("%s%s%s", Mongo.mongoDomain, Mongo.mongoAuth, Mongo.mongoHost);
        log.info('mongo data collected: ', Mongo.mongoUrl);
    }

    /*
    static init(){
        return new Promise(function(resolve, reject){
            //connect
            mongo.connect('mongodb://localhost/RCSwebsite', function(err, db){
                if(err){ log.error(err); return reject(false); }

                collections.forEach(collectionName => {
                    db.collection(collectionName, function(err, collection){
                        if(err) {
                            log.error(err);
                            return reject(false);
                        }
                        else
                            log.info('connected to collection ' + collectionName);
                    });
                });

                resolve(true);
            });
        });
    }
    */

    static getMongoUrl(){
        return Mongo.mongoUrl;
    }
}

module.exports = Mongo;
