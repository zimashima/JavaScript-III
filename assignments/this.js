/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
Window binding is when you set a variable/value in global scope, but try to use `this` to call that variable.

* 2. Implicit Binding
It is when you use `this` inside of a scope or function. Very basic and is the most common use. `this` will take the value of the object on the left of the dot when a function is invoked. The object is the one being passed in side of the function.

* 3. New Binding
New binding allows you to create new objects using a Constructor function and 'new' command by using `this` inside Constructor function to pass on any values as set by the Constructor.

* 4. Explicit Binding
When you use call or apply method.

* write out a code example of each explanation above

*/

function WhatJSDoes(attrs){
    this.name = attrs.name;
    this.section = attrs.section;
    this.location = attrs.location;
    this.status = attrs.status;
    this.report = function(){
        console.log(`A ${this.section} Lambda School Student found ${this.status} in ${this.location}. \nStudent's Name is ${this.name} and the cause of the student's condition seems to come from JavaScript.\n`)
    }
}

// Principle 1

// code example for Window Binding

const firstname = 'Mashima'

function whoDis(name){
    console.log(`Who dis?`)
    console.log(this) 
    return name
}

whoDis(firstname)

// Principle 2

// code example for Implicit Binding

const myTL = {
    name: 'allie',
    whoDis: function(){
        console.log(`Who is my TL?`)
        console.log(`It's ${this.name}`)
    }
}

myTL.whoDis()

// Principle 3

// code example for New Binding

const mashima = new WhatJSDoes({
    name: 'Mashima',
    section: 'WEB25',
    location: 'Florida USA',
    status: 'barely alive'
})

const karen = new WhatJSDoes({
    name: 'Karen',
    section: 'WEB25',
    location: 'California USA',
    status: 'catatonic'
})

mashima.report()
karen.report()

// Principle 4
// code example for Explicit Binding

karen.report.call(mashima)
mashima.report.call(karen)