
//criar um classificador de niveis de herói (xp)
//variavel com nome e xp
//xp <= 1000 = nivel Ferro
//xp > 1000 & xp <= 2000 = nivel Bronze
//xp > 2000 & xp <= 5000= nivel Prata 
//xp > 5000 & xp <= 7000= nivel Ouro 
//xp > 7000 & xp <= 8000= nivel Platina 
//xp > 8000 & xp <= 9000= nivel Ascendente
//xp > 9000 & xp <= 10000= nivel Imortal
//xp > 10000 = nivel Radiante

//saida o heroi xyz esta no nivel "ferro"

let nomeHeroi 
let xpHeroi 
let nivelHeroi

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o nome do Heroi: ", (respostaNome) => {
    nomeHeroi = String(respostaNome); 

rl.question("Digite o Nivel de poder em (xp): ", (respostaXp) => {
    xpHeroi = parseInt(respostaXp);

    if(xpHeroi <= 1000){
        nivelHeroi = " Nivel Ferro"
    }else if(xpHeroi > 1000 & xpHeroi <= 2000){
        nivelHeroi = " Nivel Bronze"
    }else if(xpHeroi > 2000 & xpHeroi <= 5000){
        nivelHeroi = " Nivel Prata"
    }else if (xpHeroi > 5000 & xpHeroi <= 7000){
        nivelHeroi = " Nivel Ouro"
    }else if(xpHeroi > 7000 & xpHeroi <= 8000){
        nivelHeroi = " Nivel Platina"
    }else if(xpHeroi > 8000 & xpHeroi <= 9000){
        nivelHeroi = " Nivel Ascendente"
    }else if(xpHeroi > 9000 & xpHeroi <= 10000){
        nivelHeroi = " Nivel Imortal"
    }else{
        nivelHeroi = " Nivel Radiante"
    }
    
    
    console.log(nomeHeroi + " está no" + nivelHeroi)

    rl.close();
})
})

