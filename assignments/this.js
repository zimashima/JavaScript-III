/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding


* 2. Implicit Binding


* 3. New Binding


* 4. Explicit Binding


* write out a code example of each explanation above

*/

function WhatJSDoes(attrs){
    this.name = attrs.name;
    this.section = attrs.section;
    this.location = attrs.location;
    this.status = attrs.status;
}

// Principle 1

// code example for Window Binding
const firstname = 'Mashima'

function whoDis(name){
    console.log(`Who dis?`)
    console.log(this) // this doesn't really work
    return name
}

whoDis(firstname)

// Principle 2

// code example for Implicit Binding

function WhatJSDoes(attrs){
    this.name = attrs.name;
    this.section = attrs.section;
    this.location = attrs.location;
    this.status = attrs.status;
    this.report = function(){
        console.log(`A ${this.section} Lambda School Student found ${this.status} in ${this.location}. \n Student's Name is ${this.name} and the cause of the student's condition seems to come from JavaScript.\n`)
    }
}

// Principle 3

// code example for New Binding

const mashima = new WhatJSDoes({
    name: 'Mashima',
    section: 'WEB25',
    location: 'Florida USA',
    status: 'barely alive'
})

const chance = new WhatJSDoes({
    name: 'Mashima',
    section: 'WEB25',
    location: 'California USA',
    status: 'catatonic'
})

mashima.report()
chance.report()

// Principle 4
// code example for Explicit Binding

chance.report.call(mashima)
mashima.report.call(chance)