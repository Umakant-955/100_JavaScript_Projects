

function totalAmount(){
    var billAmount=document.getElementById("billAmount").value;
    var tipAmount=document.getElementById("tipPercentage").value;
    var total= billAmount * (1 + tipAmount / 100);
    var Error=document.getElementById("billError");
    if(billAmount==""){
        Error.innerHTML=`Please enter bill amount`.fontcolor("red");
    }else{
        document.getElementById("result").innerHTML=total.toFixed(2);
        Error.innerHTML="";
    }
}