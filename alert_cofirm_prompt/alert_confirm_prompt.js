function quer_somar() { //é a primeira função que aparece, pergunta se o usuario quer somar 2 numeros
    const result_quer_soma = confirm('Quer somar dois numeros? aperte ok, ou cancele')
    return result_quer_soma
}
let valor_1;
function numero_1(){ //é o primeiro numero a ser somado
    return valor_1 = parseFloat(prompt('digite um numero'))
}

let valor_2;
function numero_2(){ //é o segundo numero a ser somado
    return valor_2 = parseFloat(prompt('digite um numero'))
}

function tentar_nov_1() {
    const tentar_1 = confirm('voce só pode digitar numeros, quer tentar novamente?')
    return tentar_1
}

function tentar_nov_2() {
    const tentar_2 = confirm('voce só pode digitar numeros, quer tentar novamente?')
    return tentar_2
}

const alert_nao_somar = () => alert('voce optou por nao somar e ser direcionado para a página')

const soma = () => valor_1 + valor_2

const fim_processo = () => alert('novamente voce não digitou numeros e a soma não pode ser feita e será direcionado para a página')
//-------------------------------------------------------------------------------------------------------

if(!quer_somar()) alert_nao_somar()
else{
    numero_1()
    if(valor_1){
        numero_2()
        if(valor_2) alert(soma())
    }
}
