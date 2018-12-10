/*

var john ={
    name: 'John',
    yearOfBirth:1999,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    console.log(2016- this.yearOfBirth);

};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
john.calculateAge();
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/
/*
var personProto = {
    calculateAge: function () {
        console.log(2016 -
        this.yearOfBirth);

    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth =1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: {value: 'designer'}
});
*/
//Primitives
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;

obj.age = 30;
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b ) {
    a = 30;
    b.city = 'San Francisco'

}

change(age, obj);


console.log(age);
console.log(obj.city);
*/

// Passing functions as variables

/*
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalcForFunction(arr, fn) {
    var arrRes = [];
    for(var i = 0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
  return arrRes;
}

function calculateAge(el) {
    return 2016 - el;

}

function isFullAge(el) {

        return el >=18;



}

var ages = arrayCalcForFunction(years, calculateAge);

console.log(ages);
var fullAges = arrayCalcForFunction(ages, isFullAge );

console.log(fullAges);

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206, 9 - (0.67 * el));

    } else {
        return -1;
    }
}

var rates = arrayCalcForFunction(ages, maxHeartRate);
console.log(rates);
*/

//First class functions
// Functions returning functions
/*

function  interviewQuestion(job) {
    if(job === 'designer'){
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');


        }
    }else if(job === 'teacher'){
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');

        }


    }else{
        return function (name) {
            console.log('What do you do, ' + name + '?');

        }
    }

}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('John');
interviewQuestion('teacher')('mark');

function codingQuestion(language) {
    if( language === 'react'){
        return function (name) {
            console.log('Can you please explain what component in React are, ' + name + '?' );

        }
    }else if(language === 'html'){
        return function (name) {
            console.log(name + ", what is the html 'boiler plate'?");

        }
    }else{
        return function (name) {
            console.log('What is your coding, ' + name);
        }
    }
}

var reactQuestion = codingQuestion('react');
reactQuestion('damian');

var htmlQuestion = codingQuestion('html');
htmlQuestion('jenny');

codingQuestion('ruby')('mancerek');
var pythonQuestion = codingQuestion('python');
pythonQuestion('bocian');-
*/

//IIFE Immediatelly Invoked Function Expressions
/*
function game() {
    var score = Math.random()*10;
    console.log(score>= 5);

}
game(); */


(function () {
    var score = Math.random()*10;
    console.log(score>= 5);

})();
console.log(score);
(function (goodLuck) {
    var score = Math.random()*10;
    console.log(score >= 5-goodLuck)

})(5);

console.log(score);