//kis trh se data ko memeoary me rkha jta hai or access kiya jta hai uss bases pe data do categoraziation  primitive or nonprimitive

//1:primitive :

//jitne bi primitve type hai wo call by value hote hai jbhi inko kaise se kai copy krte hai jo unka orginal data hai wo reference apko orginal data ka nhi diya jta inko copy krke apko diya jta hai


//7types:string,number,boolean,null,undefined,symbol,BigInt


//symbol:kisi bi value ko unqiue banane ke liye symbol use krte hai
//Bigint:scinetif value or bhot bdhi value wo handle nhi hori hai



//2:reference type:also called non primitive:
//inka reference apko direct meamory me allocate kiya ja skta hai

//types:arrays,objects,fuctions

//but safety wise static is more safe than dynamic

//1) Primitive Datatypes
       //Number => number
       //String  => string
       //Boolean  => boolean
       //null  => object
       //undefined  =>  undefined
      // Symbol  =>  symbol
      // BigInt  =>  bigint

// Non-primitive Datatypes
       //Arrays  =>  object
      // Function  =>  function
      // Object  =>  object


//interview q: javascipt is dynamicaly type or staticly type lang:
//=>JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

//For example, in JavaScript, you can do the following:

//let x = 10; // x is now a number
//x = "Hello"; // x is now a string
//x = true; // x is now a boolean
//On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

//Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

//int x = 10; // x is a variable of type int
//String name = "John"; // name is a variable of type String
//JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.


//++++++++++++++++++memoary++++++++++


//there are two types of memeoary first is stack memoary and another one is heap memoary


//stack used is primitive,,, heap is used in non prmitive

//jbhi apne stack memaory declare ki hogi thoapko uska copy mitla hai

//jo bhi heap memaory me declare ki hogi wa se milta hai refrence means jo bhi change krenge wo original value me change hoga


//this is example of call by value or in stack or primitive type
let userName="dmvei"
let userId=userName
//console.log(userId)
userId="dnveve"
//console.log(userName)
//console.log(userId)



//example of heap meamoary or non primitive type or call by refrence
let userOne=
{
      email:"soham@hhss",
      upiId:"jndcijd"
}
let userTwo=userOne;
//here fo accessing object is the syntax .email we learn further also but this type it is written keep in mind
userTwo.email="hitesh@ihjeij";

console.log(userOne.email)
console.log(userTwo.email)

