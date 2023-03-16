const quer_somar = () => confirm('Quer somar dois numeros')

let valor_1;
function numero_1() { //é o primeiro numero a ser somado
    return valor_1 = parseFloat(prompt('digite um numero'))
}

let valor_2;
function numero_2() { //é o segundo numero a ser somado
    return valor_2 = parseFloat(prompt('digite um numero'))
}

let tentar_1;
function tentar_nov_1() {
    return tentar_1 = confirm('voce só pode digitar numeros, quer tentar novamente?')
}

let tentar_2;
function tentar_nov_2() {
    return tentar_2 = confirm('voce só pode digitar numeros, quer tentar novamente?')
}

const alert_nao_somar = () => alert('voce optou por nao somar e ser direcionado para a página')

const soma = () => valor_1 + valor_2

const fim_processo = () => alert('novamente voce não digitou numeros e a soma não pode ser feita e será direcionado para a página')
//-------------------------------------------------------------------------------------------------------

if (!quer_somar()) alert_nao_somar()
else {
    numero_1()
    if (valor_1) { //caminhos com o valor_1 válido
        numero_2()
        if (valor_2) alert(soma())
        else{
            tentar_nov_2()
            if(tentar_2){
                numero_2()
                if(valor_2) alert(soma())
                else fim_processo()
            }
            else fim_processo()
        }
    } else { // caminhos com o valor_1 não válido
        tentar_nov_1()
        if (tentar_1) {
            numero_1()
            if (valor_1){ //com o valor_1 digitado certo da segunda vez
                numero_2()
                if(valor_2) alert(soma())
                else{
                    tentar_nov_2()
                    if(tentar_2){
                        numero_2()
                        if(valor_2) alert(soma())
                        else fim_processo()
                    }
                    else fim_processo()
                }
            }
            else fim_processo()
        } else fim_processo()
    }
}
