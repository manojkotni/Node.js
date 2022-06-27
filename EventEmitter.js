var events = require('events');

var util = require('util');

var Person = function(name){
    this.name=name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var People = [james,mary,ryu];

People.forEach(function(Person){
    Person.on('speak', function(msg){
        console.log(Person.name + 'said:' + msg);

    });

});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a Curry');