// Wap check if a number is divisible by 7 or not
a=49
if(a%7==0){
    console.log("Divisible");
} 
else{
    console.log("Not Divisible");
}
a%7==0?console.log("Divisible"):console.log("not Divisible");
// Wap check if a number is multiple of 3 or not
b=32
if(b%3==0){
    console.log("Mulitiple");
}
else{
    console.log("Not Mulitiple");
}

// wap check if a number is postive or not
c=34
if(c>0){
    console.log("Postive Number");
}
else{
    console.log("Not Positive number");
}
c>0?console.log("Postive Number"):console.log("Not Positive Number");
// wap check if a number is 3 digit number or not)
d=356
if(d<999&&d>100){
    console.log("3 Digit Number");
}
else{
    console.log("Not 3 digit number");
}
d<999&&d>100?console.log("3 Digit Number"):console.log("Not 3 Digit Number");
// wap print even or odd for a given number
e=567
e%2==0?console.log("Even Number"):console.log("odd number");
// wap print the greatest number in given two numbers
f=345
g=789
f<g?console.log(" F Greatest "):console.log(" G Greater"); 
// wap primt the least number in given two numbers
h=234
k=567
h>k?console.log(" H Least "):console.log("K Least");
// wap print the Greatest number in given three numbers
a=234
b=456
c=678
if(a>b){
    great=a;
}
else{
    great=b;

}
if(c>great){
console.log("c is Greater");
}
else{
    console.log("great is Greater");
}

// wap print the least number in given three numbers
if(a<b){
least=a;
}
else{
    least=b;
}
if(c<least){
    console.log(" c is least");
}
else{
    console.log("least is smaller");
}

//unit place

da= d%10
if(da == 4){
    console.log("Number have 4 in its unit's place")
}
else{
    console.log("Unit's place digit is ",da)
}
