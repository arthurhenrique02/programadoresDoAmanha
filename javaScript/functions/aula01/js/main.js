function soma() {
    // solicitar dados do usuário e guardar em variáveis
    // prompt irá pegar os dados do usuário em formato de string
    // ao passar dentro do Number(), irá transformar esta string em um Número
    // habilitando, assim, a possibilidade de cálculo
    let num1 = Number(window.prompt("Digite um numero: "));
    let num2 = Number(window.prompt("Digite outro numero: "));

    // soma os dois nums e guarda em uma variavel
    let soma = num1 + num2;

    window.alert(`O total da soma é: ${soma}`);

    console.log(`O total da soma é: ${soma}`);
}

soma();

function divisao() {
    // solicitar dados do usuário e guardar em variáveis
    // prompt irá pegar os dados do usuário em formato de string
    // ao passar dentro do Number(), irá transformar esta string em um Número
    // habilitando, assim, a possibilidade de cálculo
    let num1 = Number(window.prompt("Digite um numero: "));
    let num2 = Number(window.prompt("Digite outro numero: "));

    // soma os dois nums e guarda em uma variavel
    let divisao = num1 / num2;

    window.alert(`O total da soma é: ${divisao}`);

    console.log(`O total da soma é: ${divisao}`);
}

divisao();


function subtracao() {
    // solicitar dados do usuário e guardar em variáveis
    // prompt irá pegar os dados do usuário em formato de string
    // ao passar dentro do Number(), irá transformar esta string em um Número
    // habilitando, assim, a possibilidade de cálculo
    let num1 = Number(window.prompt("Digite um numero: "));
    let num2 = Number(window.prompt("Digite outro numero: "));

    // soma os dois nums e guarda em uma variavel
    let subtracao = num1 - num2;

    window.alert(`O total da soma é: ${subtracao}`);

    console.log(`O total da soma é: ${subtracao}`);
}

subtracao();



