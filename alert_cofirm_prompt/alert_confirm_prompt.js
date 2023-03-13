const quer_somar = confirm('Quer somar dois numeros? aperte ok, ou cancele')

if (!quer_somar) alert('continue para a pagina')
else {
    const valor_1 = prompt('digite um numero');

    if (isNaN(valor_1)) {
        const tentar_nov = confirm('nao é um numero valido, quer tentar novamente?') //erro se o user nao digitar um numero

        if (!tentar_nov) alert('continue para a pagina') // se o user nao quiser continuar a soma, encerra aqui
    } else {
        const valor_2 = prompt('digite um numero');

        if (isNaN(valor_2)) {
            const tentar_nov_2 = confirm('nao é um numero valido, quer tentar novamente?') //erro se o user nao digitar um numero no valor_2
            if (!tentar_nov_2) {
                alert('continue para a pagina')
            } else {
                const soma_valores = parseFloat(valor_1) + parseFloat(valor_2)
                alert(soma_valores)
            }

        } else {
            const soma_valores = parseFloat(valor_1) + parseFloat(valor_2)
            alert(soma_valores)
        }


    }


}



