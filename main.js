function pesquisaSatisfacao(){
    let somaSatisfeitas, somaInsatisfeitas, nota, contador
    contador = 1
    somaSatisfeitas = 0
    somaInsatisfeitas = 0
    nota = 0

    while(contador <= 10){
        nota = Number(prompt(`Informe a nota da pessoa ${contador}`))
        if(nota >= 8){
            somaSatisfeitas++
            contador++
        } else if(nota < 8) {
            somaInsatisfeitas++
            contador++
        } else if(!nota){
            
        }
        
    }
    alert(`Pessoas satisfeitas: ${somaSatisfeitas} | Pessoas insatisfeitas: ${somaInsatisfeitas}`)
    
    
}