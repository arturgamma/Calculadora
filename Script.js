const interface = require('readline-sync')
var resp = ""
do {
    console.log('1 - Somar')
    console.log('2 - Subtração')
    console.log('3 - Multiplicação')
    console.log('4 - Divisão')
    console.log('5 - Sair')
        //console.log('Pressione enter para continuar!!')
    resp = interface.question("Qual operacao deseja realizar, entrar com o numero correspondente:")
    if (resp != '5') {
        var primNumero = interface.question('Digite o primeiro numero:')
        var segNumero = interface.question('Digite o segundo numero:')
        switch (resp) {
            case "1":
                let result = Number(primNumero) + Number(segNumero)
                console.log(`O resultado da soma entre ${primNumero} e ${segNumero} é ${result}!`)
                break;
            case "2":
                var result = Number(primNumero) - Number(segNumero)
                console.log(`O resultado da subtraçao entre ${primNumero} e ${segNumero} é ${result}!`)
                break;
            case "3":
                var result = Number(primNumero) * Number(segNumero)
                console.log(`O resultado da multiplicaçao entre ${primNumero} e ${segNumero} é ${result}!`)
                break;
            case "4":
                var result = Number(primNumero) / Number(segNumero)
                console.log(`O resultado da divisao entre ${primNumero} e ${segNumero} é ${result}!`)
                break;
            default:
                break;
        }

    }
    console.log('\033[2J')
} while (resp != '5')