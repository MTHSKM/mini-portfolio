//Seleção dos elementos
const abas = document.querySelectorAll('.aba')

//Funções
function selecionarAba(aba){
     const abaSelecionada = document.querySelector('.aba.selecionado')
        abaSelecionada.classList.remove('selecionado')

        aba.classList.add('selecionado')
}

function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector('.informacao.selecionado')
        informacaoSelecionada.classList.remove('selecionado')
        
        const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
        const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
        informacaoASerMostrada.classList.add('selecionado')
}

//Eventos
abas.forEach((aba)=>{
    aba.addEventListener('click', ()=>{

        if(aba.classList.contains('selecionado')){
            return;
        }
       
        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)
    })
})