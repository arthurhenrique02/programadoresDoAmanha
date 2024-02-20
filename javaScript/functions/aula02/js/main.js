function soma(num1, num2){
    return num1 + num2;
}

function exibir(val){
    alert(val);
}

let num1 = parseInt(prompt("Digite um num: "));
let num2 = parseInt(prompt("Digite outro num: "));

let s = soma(num1, num2);
exibir(s);