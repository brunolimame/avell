//ABRIR MENU DROPDOWN AUTOMATICAMENTE
const itensMenuDropdown = document.getElementsByClassName('lista-menu dropdown');

Array.prototype.forEach.call(itensMenuDropdown, (element, index, array) => {
    element.addEventListener("click", function (event) {
        if (!element.classList.contains('aberto')) {
            Array.prototype.forEach.call(array, (e, i, a) => {
                e.classList.remove('aberto');
            });
            element.classList.add('aberto')
        } else {
            element.classList.remove('aberto')
        }
    }, false);

    element.addEventListener("mouseover", function (event) {
        if (window.screen.width > 820) {
            element.classList.add('aberto');
        }
    }, false);

    element.addEventListener("mouseout", function (event) {
        if (window.screen.width > 820) {
            element.classList.remove('aberto');
        }
    }, false);
});

//ALTERAR CAPA DO MENU DE NOTEBOOKS
const itensCapaMenuNotebook = document.getElementsByClassName('capa-menu-notebook');
const imgCapaMenuNotebook = document.getElementById("notebooks-sub-capa-img");
Array.prototype.forEach.call(itensCapaMenuNotebook, (element, index, array) => {
    element.addEventListener("mouseover", function (event) {
        imgCapaMenuNotebook.src = element.dataset.img;
        imgCapaMenuNotebook.alt = element.title;
    }, false);
});

//FIXANDO MENU
const elBody = document.getElementsByTagName('body')[0];
const topoAcaoObserver = (itens, observer) => {
    if (itens[0].isIntersecting) {
        elBody.classList.remove('menu-fixo');
    } else {
        elBody.classList.add('menu-fixo');
    }
};
const topoObserver = new IntersectionObserver(topoAcaoObserver, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
})
topoObserver.observe(document.getElementById('topo-primario'));

document.addEventListener('scroll', function (e) {
    var posicaoAtualMarcador = document.getElementById('marcador-menu').getBoundingClientRect().top;
    var alturaMenu = document.getElementById('topo-geral').offsetHeight;
    if (elBody.classList.contains('menu-fixo')) {
        if (posicaoAtualMarcador > alturaMenu) {
            elBody.classList.remove('menu-fixo');
        }
    }
});
const itensEscolhaSuaMaquina = document.getElementsByClassName('sua-maquina-container');

Array.prototype.forEach.call(itensEscolhaSuaMaquina, (element, index, array) => {
    element.addEventListener("click", function (event) {
        if (!element.classList.contains('aberto')) {
            Array.prototype.forEach.call(array, (e, i, a) => {
                e.classList.remove('aberto');
            });
            element.classList.add('aberto')
        } else {
            element.classList.remove('aberto')
        }
    }, false);
});
const elementosAcaoModal = document.querySelectorAll("*[data-evento='modal']");

Array.prototype.forEach.call(elementosAcaoModal, (element, index, array) => {
    element.addEventListener("click", function (event) {
        if(element.dataset.modal){
            document.getElementById(element.dataset.modal).classList.toggle('aberto');
        }
    }, false);
});
const cardAccordion = document.querySelectorAll('*[data-accordion]');
Array.prototype.forEach.call(cardAccordion, (element, index, array) => {
    element.addEventListener("click", function (event) {
        var nomeAccordion = element.dataset.accordion;
        document.querySelectorAll('*[data-name="' + nomeAccordion + '"]')[0].classList.toggle('fechado');
    }, false);
});
var exibirProdutosEmGrade = true;
const botoesAlterarModoDeListagemGradeLista = document.querySelectorAll("*[data-evento='lista-produtos']");
const elementoContainerListaProdutos = document.getElementsByClassName('loja-produtos-lista')[0];
const elementoItensProdutos = document.getElementsByClassName('oferta-item');

function verificarStatusDoBotaoModoDeListagel(){
    Array.prototype.forEach.call(botoesAlterarModoDeListagemGradeLista, (element, index, array) => {
        if ((element.dataset.acao == 'produtos-em-grade' && exibirProdutosEmGrade) || (element.dataset.acao == 'produtos-em-lista' && !exibirProdutosEmGrade)) {
            element.classList.add('ativo');
        } else {
            element.classList.remove('ativo');
        }
    });
}
verificarStatusDoBotaoModoDeListagel();
Array.prototype.forEach.call(botoesAlterarModoDeListagemGradeLista, (element, index, array) => {
    element.addEventListener("click", function (event) {
        exibirProdutosEmGrade = element.dataset.acao == 'produtos-em-grade';
        if (exibirProdutosEmGrade) {
            elementoContainerListaProdutos.classList.remove('lista');
        } else {
            elementoContainerListaProdutos.classList.add('lista');
        }
        verificarStatusDoBotaoModoDeListagel();
        Array.prototype.forEach.call(elementoItensProdutos, (element2, index2, array2) => {
            if (exibirProdutosEmGrade) {
                element2.classList.remove('lista');
            } else {
                element2.classList.add('lista');
            }
        });

    }, false);
});

const botoesAbrirFiltro = document.querySelectorAll("*[data-evento='abrir-filtro-produtos']");
const elementoAbrirFiltro = document.getElementsByClassName('loja-container')[0];
Array.prototype.forEach.call(botoesAbrirFiltro, (element, index, array) => {
    element.addEventListener("click", function (event) {
        console.log('filtro');
        elementoAbrirFiltro.classList.toggle('filtro-aberto');
    }, false);
});
