function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero
    let i
    dif = ate-de+1

    if(ate<de){
        alert('O campo "Do número" deve ser menor do que o campo "Até o número".')
        } else{
        if(dif<quantidade){
            alert('Quantidade deve ser menor ou igual ao intervalo');
        }else {
            for(i=0; i<quantidade; i++){
                numero = gerarNumeroAleatorio(de, ate);
                while(sorteados.includes(numero)){
                    numero = gerarNumeroAleatorio(de, ate);
                }
                sorteados.push(numero);
            }     
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = (`Números sorteados: ${sorteados}`);

            habilitarReiniciar();
        }
    }
}

function gerarNumeroAleatorio(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);
    }

function habilitarReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
    }

}


function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = 'Números sorteados: nenhum até agora';

}
