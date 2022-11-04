//concat methods

const number1 = ['nahid', 'jahid'];
const number2 = ['fahim','nayen'];
const result = number1.concat(number2)
document.write('concat method : ',  result ,'<br></br>')

//every methods 


const num = [18,20,19,28,36];
document.write(num ,"<br></br>");
const n = num.every(chakout);
document.write( n ,"<br></br>" )
function chakout(numberi){
    return numberi >= 18;
}

//some

const ages = [ 12,25,14,16,18];
document.write(ages, "<br></br>")
const a =  ages.some(chak);
document.write(a ,"<br></br>" )
function chak(age){
    return age >= 18;
}


//fill Methods
let name = ['jahid', 'nahid', 'tahid'];
name.fill('abdullaha')
document.write(name ,"<br></br>")

//filter Methods

const largnumber = [ 14,12,19,18,20];
document.write (largnumber,"<br></br>")
const lar = largnumber.filter(chakd);
document.write(lar + "<br></br>")
function chakd(number){
    return number >= 18;
}


//find methods

const hiegthAge = [ 18,20,14,15];
document.write(hiegthAge + "<br></br>")


const hei = hiegthAge.find(chak);
document.write(hei+ " <br></br>")
function chak(hei){
    return hei >= 19;
}


//findIndex methods

const hiegthAgei = [ 18,20,14,15];
document.write(hiegthAgei + "<br></br>")


const heig = hiegthAge.findIndex(chak);
document.write(heig+ " <br></br>")
function chak(hei){
    return hei >= 19;
}


// forEach Methods

const name1  = ['sakib',' al-amin','nur-alom' ]
name1.forEach(function(value){
    document.write(value + "<br></br>")
})

// from 
document.write(Array.from("Bangladesh"));


//Includes

const nameSarch = ['fahim', 'himel','jahid'];
document.write(nameSarch + "<br></br>")

const d = nameSarch.includes('fahim')
document.write(d + "<br></br>")

//isArray

let name2 = ['2','5','8'];
let b = Array.isArray(name2);
document.write(b + "<br></br>")


//join

const join = [ 'sanju','khan'];
const join1 = join.join(" ")
document.write(join1 + "<br></br>")

//map() method 

var number4 = [1,2,3,4,5,6];
document.write(number4 + "<br></br>")

var result4 = number4.map(newi)
document.write(result4 + "<br></br>")
function newi(n){
    return 2 * n
}

// pop Methods

var pop = [ 1,2,3,4];
document.write(pop + "<br></br>")
var k =  pop.pop();
document.write(k + "<br></br>") 


//push
var push = [ 1,2,3,4];
var kn =  push.push(5);
document.write(push + "<br></br>")

document.write(kn + "<br></br>")



// slice and splice


const company  = ['fac','you','tuw','ins']
document.write(company);
const CopyComName = company.slice(1,3)
const CopyComNamei = company.splice(1,3, "neha","teha")

// sort

var  sort = ['k','n','p','b','a' ];
sort.sort();
document.write(sort + "<br></br>" )


var  sorti = ['r','h','p','b','a' ];
sorti.reverse();
document.write(sorti + "<br></br>" )


// shift Unshift

let shif = [ 2,5,8,74,6]
document.write(shif)
let shi = shif.shif() 
let shii = shif.unshift(5) 


// Write a program for concatenation two array (using spread operator).


const number0 = ['nahid', 'jahid'];
const number22 = ['fahim','nayen'];
const resulti = [...number0 , ...number22]
document.write('concat method : ',  resulti ,'<br></br>')


// Object keys values entries

var obj = { name: 'abdullah', job: 'react', color : 'yellow'  }
var keys = Object.keys(obj)
var keys = Object.values(obj)
var keys = Object.entries(obj)
document.write(keys + "<br></br>")

// Object hasOwn
var ObjList = {
    name : 'babul',
    age: 29
}
var o = ObjList.hasOwnProperty('name')
document.write('Name is ', o + "<br></br>")




//Write a program for merging two object (using spread operator).

const person = {
    name: "John Doe",
    location: "Remote"
}
const job = {
    title: "Full stack developer",
    location: "Office"
}
const employee = {...person,...job}

document.write(employee + "<br></br>")




// Write a program using simple for loop.


for(let i = 0; i<=5; i++){
    // console.log(i);
}


// Write a program using for-in loop.

var ob = {
    price : 24,
    job: 'js',
    color : 'yellow',
}
for( let nu in ob){
    document.write(nu + "<br></br>")
}


// Write a program using for-of loop.

var arr = ['21','25','87'];
for( let n  of arr){
    document.write(n + "<br></br>")
}