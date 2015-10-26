var assert = require("assert");
web = require(__dirname+"/../app.js");

describe('appweb', function(){
    describe('appweb', function(){
        it('Debe cargar la app', function(){
            assert(web, "Cargado");
        });
    });
});