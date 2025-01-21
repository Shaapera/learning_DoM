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