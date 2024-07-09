let listaNumerosSorteados = [];
let numeroLimite = 30;
let numeroS = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTexto(tag, texto){
 
    let camando = document.querySelector(tag)
    camando.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTexto("h1", "Jogo do Número Secreto");
    exibirTexto("p", "Escolha um número entre 1 e 30");
}

console.log(numeroS);

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroS){
        let palavraTentativa = tentativa > 1? "tentativas" : "tentativa";
        exibirTexto("h1", "Acertou!!!!");
        exibirTexto("p", "Você descobriu o numero secreto em "+tentativa+ " "+ palavraTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute < numeroS){
             exibirTexto("p", "O numero secreto é maior");
        }else{
                exibirTexto("p", "O numero é menor");
        }
         tentativa++;
         limpaCampo();
    }
}

function reiniciarJogo(){
    limpaCampo();
    exibirMensagemInicial();
    numeroS = gerarNumeroAleatorio();
    tentativa = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}


function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantNumeros = listaNumerosSorteados.length;
    if(quantNumeros == numeroLimite){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limpaCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

