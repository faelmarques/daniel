function pesquisaSatisfacao(){
    let somaSatisfeitas, somaInsatisfeitas, nota, contador, media, soma
    contador = 1
    somaSatisfeitas = 0
    somaInsatisfeitas = 0
    nota = 0
    media = 0
    soma = 0

    while(contador <= 10){
        nota = Number(prompt(`Informe a nota da pessoa ${contador}`))
        if(nota == 0 && !nota){ //a corrigir | 0 não funciona
           
        } else if(nota >= 8){
            somaSatisfeitas++
            contador++
            soma += nota
        } else if(nota < 5){
            somaInsatisfeitas++
            contador++
            soma += nota
        } else {
            contador++
        }
    }
    media = soma / 10
    alert(`Pessoas satisfeitas: ${somaSatisfeitas} | Pessoas insatisfeitas: ${somaInsatisfeitas}`)
    alert(`Média de notas: ${media}`)
    
    
}