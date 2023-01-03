let BtnEl = document.getElementById("BTN");
let WelcomeEl = document.getElementById("welcome");
let MainEl = document.getElementById("main");
let Inside1El = document.getElementById("inside1");
let Inside2El = document.getElementById("inside2");
let Inside3El = document.getElementById("inside3");
let Find1El = document.getElementById("find1")
let Find2El = document.getElementById("find2")
let Find3El = document.getElementById("find3")

BtnEl.addEventListener("click",showmain)

function showmain() {
    WelcomeEl.style.display = "none";
    MainEl.style.display = "block";
}

Find1El.addEventListener("click",insidemain1)
Find2El.addEventListener("click",insidemain2)
Find3El.addEventListener("click",insidemain3)

function insidemain1(){
    MainEl.style.display = "none";
    Inside1El.style.display = "block";
}
function insidemain2(){
    MainEl.style.display = "none";
    Inside2El.style.display = "block";
}
function insidemain3(){
    MainEl.style.display = "none";
    Inside3El.style.display = "block";
}
