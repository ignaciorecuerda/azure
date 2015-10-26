var _ = require('underscore');

// TODO: This shoul be read from a database
var heroes = [
  { 
    name: 'Infraestructura Virtual', 
    facts: [
      'Todos los apuntes estan en github',
      'El profesor de teoría es JJ', 
      'El profesor de prácticas es Fnaveros'] 
  },
  {
    name: 'Desarrollo de Aplicaciones para Internet',
    facts: [
      'Todos los apuntes estan en SWAD',
      'El profesor de teoría es Sergio', 
      'El profesor de prácticas es Guirao']
  },
  {
    name: 'Seguridad y Protección de Sistemas Informáticos',
    facts: [
      'Todos los apuntes estan en SWAD', 
      'El profesor de la asignatura es Sevilla']
  }
];


exports.index = function(req, res) {
  var names = heroes.map(function(p) { return p.name; });
  res.render('index', { heroes: names })
};

exports.hero = function(req, res) {
  var facts = _(heroes).detect(function (p) { 
    return p.name == req.params.name;
  }).facts;
  res.json(facts);
}


exports.addFact = function(req, res) {
  var hero = _(heroes).detect(function(p) {
    return p.name == req.body.name;
  });
  if(req.body.fact==''){
	console.log('comentario nulo');
	var assert = require("assert");
	assert(req.body.fact,"COMENTARIO NULO")
  }
  else{
  	hero.facts.push(req.body.fact);
	console.log('Nuevo comentario en ' + hero.name + ': ' + req.body.fact); 
  }
  
  
  res.json({status: 'ok' });
}
