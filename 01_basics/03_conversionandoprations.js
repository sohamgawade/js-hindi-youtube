let score="33abc"
score=null;
score=undefined
score=true
score=false//jo last me ayega usii pai niche ke operation perfrom honge
//console.log(typeof score);
//or another method for checking type
//console.log(typeof (score));



//here we write syntax such that   string become datype  as number boz we have number so that string should be converted into number
let valueInNumber=Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//after printing valueInNumber o/p coming NaN means not a number ,NaN is also a special type


//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0;

//here we have to conevet into bollean meaqns number is given 1 or 0 this has to convert into true or false
let isLoggedIn=1
let bolleanIsLoggedIn=Boolean(isLoggedIn)
//console.log( bolleanIsLoggedIn);

//1=>true. 0=>false. 
//""=>false
//"soham"=>true


//number is converted into string
let someNumber=33
let stringNumber=String(someNumber);

//console.log(stringNumber);
//console.log(typeof stringNumber );


/********** oprations     *********** */

let value=3;
let negValue=-value;

//console.log(negValue);
//console.log(typeof negValue);

//console.log(2+2)
//console.log(2*2)
//console.log(2/2)
//console.log(2**2)
//console.log(2-2)
//console/log(2%3) this has lot of uses in cyptography and alogorithums


//confusing conversion of string

//console.log("1"+2)
//console.log(1+"2")
//console.log("1"+2+2)//here string at first so all consider as string

//console.log(2+2+"2")//here strinh=g is last so first number fisrt add and then merged with string but this pratice is bad and it never do again


//tricky conversion

console.log(+"")
console.log(+true)

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter=100
gameCounter++;
console.log( gameCounter)
++gameCounter
console.log(gameCounter)

//intervew qunstions.   presedance oprator prefix krte tho kya hota hai or postfix krte ho tho kya hota hai
//most time o/p same ata haj but change hota hai prefix phle incement hota hai aur postfix bdme