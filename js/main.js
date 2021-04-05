// /////////////////1/////////
// var input = prompt("enter the number");
// document.getElementById("print").innerHTML = "  " + "your output  =" + input;
///////////////////////////////
//////////////////2///////////////

// var num = prompt("enter the number"),
//   numint = parseInt(num);
// if (numint % 3 == 0 && numint % 4 == 0) {
//   document.getElementById("comparison").innerHTML = "  " + "yes";
// } else {
//   document.getElementById("comparison").innerHTML = "  " + "No";
// }

/////////////////////////////
//////////3///////////////////////////////////////////////////////////////////////////////
// var num1 = parseInt(prompt("enter first num")),
//   num2 = parseInt(prompt("enter second num"));
// if (num1 > num2) {
//   document.getElementById("max").innerHTML = "  " + "max = " + num1;
// } else {
//   document.getElementById("max").innerHTML = "  " + "max = " + num2;
// }
/////////////////////////////////////////////////////////////
///////////////////////4//////////////////////////////////////////////////////////////////////////
// var numcheck = parseInt(prompt("enter the number"));
// if (numcheck < 0) {
//   document.getElementById("check").innerHTML = " number is  " + "negative ";
// } else {
//   document.getElementById("check").innerHTML = "number is   " + "positive ";
// }
////////////////////////////////////////////
//////////////////5///////////////////
// var num1 = parseInt(prompt("enter num1")),
//   num2 = parseInt(prompt("enter num2")),
//   num3 = parseInt(prompt("enter num3")),
//   min_max = document.getElementById("min_max");
// if (num1 > num2 && num1 > num3) {
//   min_max.innerHTML = "max element=" + num1 + " <br>";
//   if (num2 > num3) {
//     min_max.innerHTML += "min element =" + num3;
//   } else {
//     min_max.innerHTML += "min element=" + num2;
//   }
// } else if (num2 > num1 && num2 > num3) {
//   min_max.innerHTML = "max element =" + num2 + " <br>";
//   if (num1 > num3) {
//     min_max.innerHTML += "min element =" + num3;
//   } else {
//     min_max.innerHTML += "min element =" + num1;
//   }
// } else {
//   min_max.innerHTML = "max element=" + num3 + " <br>";
//   if (num1 > num2) {
//     min_max.innerHTML += "min element =" + num2;
//   } else {
//     min_max.innerHTML += "min element=" + num1;
//   }
// }

///////////////////////////////////
/////////////////////////6///////////////////
// var num4 = parseInt(prompt("enter number1")),
//   odd_even = document.getElementById("odd_even");
// if (num4 % 2 !== 0) {
//   odd_even.innerHTML = " number is odd";
// } else {
//   odd_even.innerHTML = " number is even";
// }
/////////////////////////////////////////////
////////////////////////8//////////////////////////
// var char = prompt("enter the character");
// if (char == "a" || char == "e" || char == "l" || char == "o" || char == "u") {
//   document.write("Vowel");
// } else {
//   document.write("constant");
// }

//////////////////////////////////////////////////
/////////////////9//////////////////////////////

// var num = parseInt(prompt("enter the number "));
// for (var i = 1; i <= num; i++) {
//   document.getElementById("_numbers").innerHTML += "<li>" + i + "</li>";
// }

///////////////////////////////////////////////
///////////////////////////////10/////////////////////////////////////////////////////

// var _num = parseInt(prompt("enter num")),
//   mult_num = document.getElementById("mult_num");
// for (var i = 1; i <= 12; i++) {
//   document.write(_num * i + " <br> ");
// }

//////////////////////////////////////////////////////
//////////////////////11///////////////////////////////////////////////////////////////

// var num6 = parseInt(prompt("enter number to get all even ")),
//   all_even = document.getElementById("all_even");
// for (var i = 1; i <= num6; i++) {
//   if (i % 2 == 0) {
//     all_even.innerHTML += i + "    ";
//   }
// }

///////////////////////////////////////////
//////////////////////12////////////////////////////////

// var num7 = parseInt(prompt("enter number1 ")),
//   num8 = parseInt(prompt("enter number2 ")),
//   power = document.getElementById("power"),
//   pow = 1;
// for (var i = 0; i < num8; i++) {
//   var pow = pow * num7;
// }
// power.innerHTML = pow;
//////////////////Another solution//////////
// power.innerHTML = Math.pow(num7, num8);
//////////////////////////////////////////////////
//////////////////////////////////////////
////////////////////////////////////////////13///////////////////////////////////
// var n1 = parseInt(prompt("enter number1 ")),
//   n2 = parseInt(prompt("enter number2 ")),
//   n3 = parseInt(prompt("enter number3 ")),
//   n4 = parseInt(prompt("enter number4 ")),
//   n5 = parseInt(prompt("enter number1 ")),
//   total = n1 + n2 + n3 + n4 + n5,
//   average = total / 5;
// document.getElementById("total").innerHTML = "total = " + total + "<br>";

// document.getElementById("total").innerHTML += " average = " + average + "<br>";

// document.getElementById("total").innerHTML += (total / 500) * 100;
////////////////////////////////////////////////////////////////////////
/////////////////////////////14//////////////////////////////////////
// var months = parseInt(prompt("enter month number (1-12)")),
//   days = document.getElementById("days");
// if (
//   months == 1 ||
//   months == 3 ||
//   months == 5 ||
//   months == 7 ||
//   months == 8 ||
//   months == 10 ||
//   months == 12
// ) {
//   document.write(" Days in Month  = 31 days");
// } else if (months == 2) {
//   document.write(" Days in Month  =  28 | 29 days");
// } else if (months == 4 || months == 6 || months == 9 || months == 11) {
//   document.write(" Days in Month = 30 days");
// } else {
//   document.write("Invalid input! Please enter month number between 1-12");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////14///////////////////////////////////////////////////
// var physics = parseInt(prompt("enter grade of physics ")),
//   Chemistry = parseInt(prompt("enter grade of Chemistry ")),
//   Biology = parseInt(prompt("enter grade of Biology ")),
//   Mathematics = parseInt(prompt("enter grade of Mathematics ")),
//   Computer = parseInt(prompt("enter grade of Computer ")),
//   total = physics + Chemistry + Biology + Mathematics + Computer,
//   percentage = (total / 500) * 100;
// console.log(percentage);

// if (percentage >= 90) {
//   window.alert("Grade  A");
// } else if (percentage >= 80 && percentage < 90) {
//   window.alert("Grade  B");
// } else if (percentage >= 70 && percentage < 80) {
//   window.alert("Grade  C");
// } else if (percentage >= 60 && percentage < 70) {
//   window.alert("Grade  D");
// } else if (percentage >= 40 && percentage < 60) {
//   window.alert("Grade  E");
// } else {
//   window.alert("Grade  F");
// }
////////////////////////////////////////////////////////////////////////////////////////
//////////////////////15///////////////////
// var months = parseInt(prompt("enter month number (1-12)")),
//   days = document.getElementById("days");
// switch (months) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days.innerHTML = " Days in Month  = 31 days";
//     break;
//   case 2:
//     days.innerHTML = " Days in Month = 28 | 29 days";
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days.innerHTML = " Days in Month = 30 days";
//     break;
//   default:
//     document.write("Invalid input! Please enter month number between 1-12");
// }

/////////////////////////////////////////
//////////////////////////16//////////////////
// var char = prompt("enter character"),
//   vowel = document.getElementById("vowel");
// switch (char) {
//   case "a":
//   case "e":
//   case "l":
//   case "o":
//   case "u":
//     vowel.innerHTML = "Vowel";
//     break;
//   default:
//     vowel.innerHTML = "Constant";
// }
/////////////////////////////////////////////
/////////////////////////17/////////////////
// var numb1 = 20,
//   numb2 = 15;

// switch (numb1 > numb2) {
//   case true:
//     document.write("number1 is maximum number2");
//     break;
//   case false:
//     document.write("number2 is maximum number1");
//     break;
//   default:
//     document.write("number1 is  equal number2");
//     break;
// }
/////////////////////////////////////////////
////////////////////////////////18////////////////////////////////
// var num = parseInt(prompt("enter the number to check "));
// switch (num % 2 == 0) {
//   case true:
//     window.alert("this number is even");
//     break;
//   case false:
//     window.alert("this number is odd");
//     break;
// }

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////19///////////////////////////////////////////////////////////////
// var num = parseInt(prompt("enter the number  "));
// switch (num > 0) {
//   case true:
//     window.alert("this number is positive");

//     break;
//   case false:
//     switch (num < 0) {
//       case true:
//         window.alert("this number is negative ");
//         break;
//       case false:
//         window.alert("this number is zero  ");
//         break;
//     }

//     break;
// }

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////20//////////////////////////
// var num1 = parseInt(prompt("enter num1")),
//   char = prompt("enter the operation "),
//   num2 = parseInt(prompt("enter num2"));

// switch (char) {
//   case "+":
//     document.write(`${num1} +  ${num2} =  `, num1 + num2);
//     break;
//   case "-":
//     document.write(`${num1} - ${num2} =  `, num1 - num2);
//     break;
//   case "*":
//     document.write(`${num1} *  ${num2} =  `, num1 * num2);
//     break;
//   case "/":
//     document.write(`${num1} /  ${num2} =  `, num1 / num2);
//     break;
//   case "%":
//     document.write(`${num1} %  ${num2} =  `, num1 % num2);
//     break;
//   default:
//     document.write("not valid operation ");
// }

//////////////////////////////////////////////////////
