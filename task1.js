var english = parseInt(prompt("Enter engllish marks"))
var maths = parseInt(prompt("Enter maths marks"))
var science = parseInt(prompt("Enter science marks"))
var total = english + maths + science;
var percentage = total*100/300;

if(total >= 80){
    document.write("Grade A " + percentage);
}
else if(total < 80 && total >= 70){
    document.write("Grade B " + percentage);
}
else if(total <= 70 && total >= 60){
    document.write("Grade C " + percentage)
}
else{
    document.write("Fail")
}