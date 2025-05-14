function calculo(){
    let cont = 1;

    let f1 = 0;
    let f2 = 0;
    let f3 = 0;
    let f4 = 0;
    let f5 = 0;

    let porc = 0;
    let porc2 = 0;

    let idade = 0;

    while(cont <= 8){
        idade = Number(prompt(`Insira a idade da pessoa ${cont}`))
        if(idade <= 15){
        f1++
        } else if(idade >= 16 && idade <= 30){
        f2++
        } else if(idade >= 31 && idade <= 45){
        f3++
        } else if(idade >= 46 && idade <= 60){
        f4++
        } else if(idade > 60){
        f5++
        } else if(!idade && idade == 0) {
        
        }
        cont++

    }
    alert(`1ª faixa etária: ${f1} | 2ª faixa etária: ${f2} | 3ª faixa etária: ${f3} | 4ª faixa etária: ${f4} | 5ª faixa etária: ${f5}`)
    

    porc = (f1 / (cont-1)) * 100    
    alert(`Porcentagem da 1ª faixa etária em relação ao total: ${porc}%`)

    porc2 = (f5 / (cont-1)) * 100
    alert(`Porcentagem da 5ª faixa etária em relação ao total: ${porc2}%`)


}