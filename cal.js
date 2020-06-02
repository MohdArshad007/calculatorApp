// CODE PEN LINK
// https://codepen.io/programmerarshad/pen/mdeYwpw
var input = document.getElementById("result");
var td = document.querySelectorAll("td");
var length = td.length;
td.forEach(index =>{
    index.addEventListener("click",()=>{
        var num = index.innerHTML;
        if(num == "="){
            var sum = eval(input.value);
            input.value = sum;
        } else if(num == "C") {
            input.value = "";
        } else if(num == "CE"){
            var value = input.value;
            value = value.substr(0,value.length-1);
            input.value = value;
        } else{
            input.value += num;
        }
    });
});
document.addEventListener("keydown",function(e){
    if(e.which == 13){
        var sum = eval(input.value);
        input.value = sum;
    } else if(e.which == 27){
        input.value = "";
    } else if(e.code.indexOf("Digit") != -1 || e.code.indexOf("Numpad") != -1 || e.code.indexOf("Minus") != -1){
        var myKey = e.key;
        input.value += myKey;
    } else if(e.code.indexOf("Backspace") != -1){
        var value = input.value;
        value = value.substr(0,value.length-1);
        input.value = value;
    } else {
        return false;
    }
});
