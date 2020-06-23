//Chapter 14 to 16

//Q1

// var student_name = [];

//Q2

// var student_name = {};

//Q3

// var student_name = ["mudasar", "hasan", "ali"];

//Q4

// var student_rollno = [1,2,3];

//Q5

// var boolean_value = [12.5,13.5, 14.5];

//Q6

// var mixed_values ["mudasar", 1, "shugar", 1.5];

//Q7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "Ph.D"];

// document.write( "<h2>Qualifications</h2>" + "<br>1)" + qualifications[0] + "<br>2)" + qualifications[1] + "<br>3)" + qualifications[2] + "<br>4)" + qualifications[3] + "<br>5)" + qualifications[4] + "<br>6)" + qualifications[5] + "<br>7)" + qualifications[6] + "<br>8)" + qualifications[7]);


//Q8

// var student_name = ["Michle", "john", "Tony"];
// var student_marks = [320, 230, 480];
// var totla_marks = 500

// document.write("Score of " + student_name[0] + " is " + student_marks[0] + ". Percentage: " + ((student_marks[0]/totla_marks)*100)+ "%" + "<br>Score of " + student_name[1] + " is " + student_marks[1] + ". Percentage: " + ((student_marks[1]/totla_marks)*100)+ "%" + "<br>Score of " + student_name[2] + " is " + student_marks[2] + ". Percentage: " + ((student_marks[2]/totla_marks)*100)+ "%" );


//Q9

// var color_name = ["red", "green", "blue"];

// document.write(color_name)

// var add_color = prompt("Please Enter color you want to add");
// color_name.unshift(add_color);
// document.write(color_name);



// var add_color = prompt("Please Enter color you want to add");
// color_name.push(add_color);
// document.write(color_name);

// var add_color = prompt("Please Enter color you want to add");
// color_name.unshift(add_color);
// document.write(color_name);



// color_name.shift();
// document.write(color_name);


// color_name.pop();
// document.write(color_name);


// var color_name = ["red", "green", "blue", "orange"];
// var index_enter = +prompt("Please enter index to change color position");
// var color_insert = prompt("Please enter your color want to enter");
// color_name.splice(index_enter, 0, color_insert);
// document.write(color_name);



// var color_name = ["red", "green", "blue", "orange"];
// var index_enter = +prompt("Please enter index to change color position");
// var color_del = +prompt("Please enter your color want to enter");
// color_name.splice(index_enter, color_del);
// document.write(color_name);



//Q10


// var student_score = [320, 230, 480, 120];
// // student_score.sort(function(a,b){return(a - b)});
// student_score.sort();
// document.write(student_score);


//Q11


// var cities = ["Karachi", "Lahore", "Faisalabad", "Islamabad", "Quetta", "Peshwar"];
// var selected_cities = cities.slice(0,3)
// document.write(selected_cities)


//Q12


// var arr = ["This","is","my","Cat"];
// document.write("Array<br>" +  arr[0] + arr[1] + arr[2]+  arr[3]);

// var srt = ("This is my Cat");
// document.write("<br><br>String<br>" + srt)


//Q13

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// devices.shift();
// devices.shift();
// devices.shift();

// document.write(devices);


// Q14

// var devices = ["keyboard", "mouse", "printer", "monitor"];
// devices.pop();
// devices.pop();
// devices.pop();

// document.write(devices);


// Q15

// var phone_manu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("Dropdown" + phone_manu[0] + "<br>" + phone_manu[1] + "<br>" + phone_manu[2] + "<br>" + phone_manu[3] + "<br>" + phone_manu[4] + "<br>" + phone_manu[5] + "<br>")




//Chapter 16 to 20



//Q1

// for(x = 1; <= 10; x++)

//Q3


// for(x= 1; x <= 10; x++){
//     document.write(x + "<br>")
// }


//Q4

// var table_no = +prompt("Enter Table No");
// var table_length = +prompt("Enter Table Length");

// document.write("Multiplication Table of " + table_no + "<br>Length: " + table_length + "<br>" )
// for(i = 1; i < table_length+1; i++){
//     document.write("<br>" + table_no + " x " + i + " = " + (i*table_no) )
// }



//Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (i = 0; i < fruits.length; i++){
//     document.write("<br>" +  fruits[i]);

// }


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for (i = 0; i < fruits.length; i++){
    
//     document.write("<br>Element of index " + i +" is " +  fruits[i])
// }










// Chapter 21 TO 25 Question 01

// var firstName = prompt("Please Enter Your 1st Name");
// var secondName = prompt("Please Enter Your 2nd Name");

// var fullName = ("Your full name is " + firstName + " " + secondName);
// alert(fullName);



// Chapter 21 TO 25 Question 02

// var mobileModel = prompt("Please enter you favorite mobile model");
// document.write("Length of string: " + mobileModel.length)


// Chapter 21 TO 25 Question 03

// var countryName = ("Pakistan");
// document.write("String: " + countryName + "<br>Index of 'n' is: " + countryName.indexOf("n"));


// Chapter 21 TO 25 Question 04

// var greet = ("Hello World");
// document.write("String: " + greet + "<br>Last Index of 'l' is: " + greet.indexOf("l",5));

// Chapter 21 TO 25 Question 05


// var greet = ("Pakistan");
// document.write("String: " + greet + "<br>Chracter at '3' is: " + greet.charAt("3"));


// Chapter 21 TO 25 Question 06


// var firstName = prompt("Please Enter Your 1st Name");
// var secondName = prompt("Please Enter Your 2nd Name");

// var fullName = firstName.concat(secondName)
// alert(fullName);


// Chapter 21 TO 25 Question 07

// var city = ("Hyderabad");
// var newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>After Replacement: " + newCity)


// Chapter 21 TO 25 Question 08

// var msg = ("Ali and Sami are best friends. They play cricket and football together.");
// var newmsg = msg.replace(/and/g, "&");
// document.write(newmsg);

// Chapter 21 TO 25 Question 09


// var value = ("472");
// var  valu = (472);
// document.write("Value: " + value + "<br>Type: " + typeof value + "<br>Value: " + valu + "<br>Type: " + typeof valu);


// Chapter 21 TO 25 Question 10


// var uperCase = prompt("Please enter city name");
// changeCase = uperCase.toUpperCase()
// document.write("user input: " + uperCase + "<br>Upper Case: " + changeCase);


// Chapter 21 TO 25 Question 11


// var uperCase = prompt("Please enter city name");
// changeCase = uperCase.charAt(0).toUpperCase() + uperCase.slice(1)
// document.write("user input: " + uperCase + "<br>Upper Case: " + changeCase);



// Chapter 21 TO 25 Question 12

// var num = (35.36);
// var n = (num.toString());
// document.write(n)











// Chapter 26 TO 30 Question 01

// var number = 3.45214;
// numberround = Math.round(number);
// numberfloor = Math.floor(number);
// numberceil = Math.ceil(number);
// document.write("Number: " + number +  "<br>Round Value: " + numberround +  "<br>Ceil of value: " + numberceil + "<br>Floor Value: " + numberfloor);



// Chapter 26 TO 30 Question 02

// var number = -2.673;
// numberround = Math.round(number);
// numberfloor = Math.floor(number);
// numberceil = Math.ceil(number);
// document.write("Number: " + number +  "<br>Round Value: " + numberround +  "<br>Ceil of value: " + numberceil + "<br>CFloor Value: " + numberfloor);


// Chapter 26 TO 30 Question 03

// Chapter 26 TO 30 Question 04

// var randomnum = Math.random()*7
// var flo = Math.floor(randomnum)
// document.write(flo)


// Chapter 26 TO 30 Question 05





// Chapter 31 TO 34 Question 01


// var rightnow = new Date();
// document.write(rightnow)

// Chapter 31 TO 34 Question 02

// var months = ['January','February','March','April','May','June','July','August','September','October','November', 'December']
// var rightnow = new Date();
// var curMonth = months[rightnow.getMonth()];
// document.write("Current Month: " + curMonth)


// Chapter 31 TO 34 Question 03

// var days = ['days','Mon','Tue','Wed','Thr','Fri','Sat','Sun'];
// var rightnow = new Date();
// var curDay = days[rightnow.getDay()];
// document.write("Today is " + curDay)

// Chapter 31 TO 34 Question 04

// var days = ['days','Mon','Tue','Wed','Thr','Fri','Sat','Sun'];
// var rightnow = new Date();
// var curDay = days[rightnow.getDay()];

// if(curDay === 'Sun'){
//     alert("Its Fun day");
// }
// else if(curDay === 'Sat'){
//     alert("Its Fun day");
// }
// else{
//     alert("Its Working Day");
// }

// Chapter 31 TO 34 Question 04







