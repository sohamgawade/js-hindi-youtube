const name="soham"
const repoCount=50

//console.log(name + repoCount).  but is bad way of writing and not much readalble or simple way old schooltype 

//console.log(`Hello my name is ${name} and my repo count is ${repoCount }`);  this is more readable and reliable way to write or show o/p


//aNOTHER WAY STRING IS DECLARED

const getName= new String('soham-htp-os');  //if we declared like this string then there is more benifit that is get to know in console of goggle we done in with the lecture it also reprset string in key value paira and another big adv that we can also access prototype 
//.log(getName[0]);
//console.log(getName.__proto__);//prtottype 
//console.log(getName.length);
//console.log(getName.toUpperCase());
//console.log(getName.charAt(2));
//console.log(getName.indexOf('m'));

const newString=getName.substring(0,4); //last ka value include nhi hogi sirf 0 to 3 tk print hogi most imp point keep in mind but it not use negative value like slice
///console.log(newString);
const newStrin=getName.slice(-3,2);  //ye negative value ko bi print krta hai pr wo fir piche se value ko count krega pr string same sequence me hi print hogi pr piche se print hogi
//console.log(newStrin);

const newStrio="  hitesh   "
console.log(newStrio);
console.log(newStrio.trim()); //trim used to remove starting space and end spaces


const url="https://soham.com/soham%20gawade"
console.log(url.replace('%20','-'));

//convert string into array and from which point to conver or split that also have to mentioned
console.log(getName.split('-'));
