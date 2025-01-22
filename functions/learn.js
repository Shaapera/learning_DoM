/*const x = document.forms["firm1"]
let text = "";
for (i = 0; i < x.lenght; i++){
    text += x.element[i].value + "<br>"
}
document.getElementById("demo").innerHTML = text;*/

/*document.getElementById("p1").innerHTML = "doing well";
document.getElementById("learning").innerHTML = "learning fast";
document.getElementById("image").src = "";*/

/*document.getElementById("demo").innerHTML = "Date : " + Date();*/

/*document.write(Date());*/


//forms validation//
function validateForm() {
    let x = document.form["myForm"]["Firstname"].value;
    if (x == "") {
        alert("Write your name");
        return false;
    
    }
}

//validating numeric input
function myFuntion() {
    let x = document.getElementById("num").value;
    let text
    if (x == NaN || x < 1 || x > 30) {
        text = "input wrong";
    } else {
        text = "input is ok";
    }
    document.getElementById("para").innerHTML = text;
}

//Dom Events
/*function changeText(id) {
    id.innerHTML = "opps";

}
document.getElementById("mybutton").addEventListener("click", function () {
    alert("hello world");
});*/

//adding many event handlers to the same element
/*const x = document.getElementById("btn"); //declaration

x.addEventListener("click", firstEvent);//didnt put the bracket here because, it means calling the function.
//since its an alert prompt it activated
x.addEventListener("click", secondEvent);
function firstEvent() {
    alert("hello shaapera");
}

function secondEvent() {
    alert("i said hello to you")
}*/

//adding three events
const x = document.getElementById("btn");
x.addEventListener("mouseover", firstEvent);
x.addEventListener("click", secondEvent);
x.addEventListener("mouseout", thirdEvent);

function firstEvent() {
    alert("you hovered the mouse over");
}
function secondEvent() {
    alert("you clicked on the button");
}

function thirdEvent() {
    alert("this is a mouse out event")
}
