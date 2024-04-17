let numeros = [];
var res = document.getElementById('res')

function adicionar(){
    
    var txtNum = document.getElementById('txtNum')
    var num = txtNum.value
    var resSele = document.getElementById('resSele')
    var n = Number(num)

    if(num.length == 0 ){
        alert('Porfavor, digite um número')
    }else if (n<1 || n > 100) {
        alert('Porfavor, digite um número valido ')
    }else if(numeros.indexOf(n) != -1){
        alert('Valor inválido ou já encontrado na lista.')
    } else{
        numeros.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        resSele.appendChild(item)
        res.innerHTML = ''
    }

    txtNum.value = '';
    txtNum.focus();
}

function finalizar() {
    const elementoFilho= res.querySelector('.resP')
    if (numeros.length == 0 ) {
        alert('Adicione valores antes de finalizar ')
    }else if(elementoFilho){
        res.innerHTML=''
    }else{
        var txt = ' '
        function adicionarElemento(texto) {
            var novoElemento= document.createElement('p');
            novoElemento.setAttribute('class', 'resP');
            novoElemento.innerText = texto
            res.appendChild(novoElemento)
        }

        txt = `Ao todo, temos ${numeros.length} números cadastrados.`
        adicionarElemento(txt)

        var maior = numeros[0];
        var menor= numeros[0]; 
        var somatoria = 0;
        var media = 0;

        for (let c in numeros) {
            var nAtual= numeros[c];
            if (nAtual > maior) {
                maior =nAtual
            }
            if (nAtual < menor) {
                menor =nAtual
            }
            somatoria += nAtual
            media = somatoria/numeros.length
        }

        txt = `O maior valor informado foi ${maior}.`
        adicionarElemento(txt)
        txt = `O menor valor informado foi ${menor}.`
        adicionarElemento(txt)
        txt = `Somando todos os valores, temos ${somatoria}.`
        adicionarElemento(txt)
        txt = `A média dos valores digitados é ${media}.`
        adicionarElemento(txt)
    }
}
