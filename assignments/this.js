/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope or window, 'this' binds to the window/global scope
* 2. Used with dot notation. Whatever is to the left of the dot (usually oints to object name) becomes 'this'.
* 3. Used in conjuction with constuctor functions. 'This' refers ONLY to the instance of the new obj being created
* 4. Explicitly defined whenever using the .call or .apply methods
*
* write out a code example of each explanation above
*/

// Principle 1
function myName(name) {
    console.log(this);
    return name;
}

myName('Aaron');

// code example for Window Binding

// Principle 2
const nameObj = {
    firstName: 'Aaron',
    lastName: 'Verdine',
    fullName: function(phrase) {
        console.log(`My name is ${this.firstName } ${this.lastName}, ${phrase}`);
        console.log(this);
    }
};

nameObj.fullName('Welcom to 355 Toyota!');

// code example for Implicit Binding

// Principle 3
function CarSounds(sound) {
    this.sound = sound;
    this.carRevs = function() {
        console.log(this.sound);
        console.log(this);
    };
}

const dodge = new CarSounds('glugglug');
const pontiac = new CarSounds('vroom');

dodge.carRevs();

// code example for New Binding

// Principle 4
dodge.carRevs.call(pontiac);

// code example for Explicit Binding