//Carregando as funções
window.addEventListener("load", carregar);
function carregar(){
    setInterval(trocar_slide_com_tempo, 4000);
    troca_slide_por_marcadores();
    trocar_curso();
}

//Código header
let cabecalho = document.getElementById('header');

let marcador0 = document.getElementById('marcador0');
let marcador1 = document.getElementById('marcador1');
let marcador2 = document.getElementById('marcador2');

let descricao_item0 = document.getElementById('item0');
let descricao_item1 = document.getElementById('item1');
let descricao_item2 = document.getElementById('item2');
//imagens
let imagens = ["url('./img/header.jpg')", "url('./img/header4.jpg')", "url('./img/header3.webp')"];

let count = 0;

//Troca por tempo
function trocar_slide_com_tempo(){
    cabecalho.style.backgroundImage=imagens[count];
    
    //exibindo a descricao
    if (count == 0) {
        descricao_item0.style.display="unset";
        descricao_item1.style.display="none";
        descricao_item2.style.display="none";    
    } else if(count == 1){
        descricao_item0.style.display="none";
        descricao_item1.style.display="unset";
        descricao_item2.style.display="none";
    }else if(count == 2){
        descricao_item0.style.display="none";
        descricao_item1.style.display="none";
        descricao_item2.style.display="unset";
    }

    if (count <= 2) {
        count++;
    }else if(count == 3){
        count = 0;
    }
}

//Troca por marcadores
function troca_slide_por_marcadores(){
    marcador0.addEventListener("click", function (e){
        cabecalho.style.backgroundImage=imagens[0];
        descricao_item0.style.display="unset";
        descricao_item1.style.display="none";
        descricao_item2.style.display="none";
    })

    marcador1.addEventListener("click", function (e){
        cabecalho.style.backgroundImage=imagens[1];
        descricao_item0.style.display="none";
        descricao_item1.style.display="unset";
        descricao_item2.style.display="none";
    })
    marcador2.addEventListener("click", function (e){
        cabecalho.style.backgroundImage=imagens[2];
        descricao_item0.style.display="none";
        descricao_item1.style.display="none";
        descricao_item2.style.display="unset";
    })
}

//Código troca curso
let cursos = document.getElementById('cursos');
let curso0 = document.getElementById('curso0');
let curso1 = document.getElementById('curso1');
let curso2 = document.getElementById('curso2');
let curso3 = document.getElementById('curso3');

let btn_avancar = document.getElementById('btn-avancar');
let btn_recuar = document.getElementById('btn-recuar');

let marcador_curso0 = document.getElementById('marcador-curso0');
let marcador_curso1 = document.getElementById('marcador-curso1');
let marcador_curso2 = document.getElementById('marcador-curso2');
let marcador_curso3 = document.getElementById('marcador-curso3');

let imagens_curso = ["url('./img/atend2.png')", "url('./img/ps4.png')", "url('./img/nt1.jpg')", "url('./img/estresse3.jpg')"];

function trocar_curso(){
    //Troca com botões
    let curso = 0;
    btn_avancar.addEventListener("click", function (e){
          curso++;
          cursos.style.backgroundImage=imagens_curso[curso];
          if(curso == 0){
              curso0.style.display="unset";
              curso1.style.display="none";
              curso2.style.display="none";
              curso3.style.display="none";
          }else if(curso == 1){
            curso0.style.display="none";
            curso1.style.display="unset";
            curso2.style.display="none";
            curso3.style.display="none"
          }else if(curso == 2){
            curso0.style.display="none";
            curso1.style.display="none";
            curso2.style.display="unset";
            curso3.style.display="none"
          }else if(curso == 3){
            curso0.style.display="none";
            curso1.style.display="none";
            curso2.style.display="none";
            curso3.style.display="unset"

          }
          if(curso == 4){
              curso = 3;
          }
    })

    btn_recuar.addEventListener("click", function (e){
          curso--;
          cursos.style.backgroundImage=imagens_curso[curso];
          if(curso == 0){
              curso0.style.display="unset";
              curso1.style.display="none";
              curso2.style.display="none";
              curso3.style.display="none";
          }else if(curso == 1){
            curso0.style.display="none";
            curso1.style.display="unset";
            curso2.style.display="none";
            curso3.style.display="none"
          }else if(curso == 2){
            curso0.style.display="none";
            curso1.style.display="none";
            curso2.style.display="unset";
            curso3.style.display="none"
          }else if(curso == 3){
            curso0.style.display="none";
            curso1.style.display="none";
            curso2.style.display="none";
            curso3.style.display="unset"

          }
          if(curso <= 0){
              curso = 0;
          }
    })

    //Troca por marcador
    marcador_curso0.addEventListener("click", function (e){
        curso0.style.display="unset";
        curso1.style.display="none";
        curso2.style.display="none";
        curso3.style.display="none";
        
        curso = 0;
        cursos.style.backgroundImage=imagens_curso[curso];
    })
    marcador_curso1.addEventListener("click", function (e){
        curso0.style.display="none";
        curso1.style.display="unset";
        curso2.style.display="none";
        curso3.style.display="none";
        
        curso = 1;
        cursos.style.backgroundImage=imagens_curso[curso];
    })
    marcador_curso2.addEventListener("click", function (e){
        curso0.style.display="none";
        curso1.style.display="none";
        curso2.style.display="unset";
        curso3.style.display="none";
        
        curso = 2;
        cursos.style.backgroundImage=imagens_curso[curso];
    })
    marcador_curso3.addEventListener("click", function (e){
        curso0.style.display="none";
        curso1.style.display="none";
        curso2.style.display="none";
        curso3.style.display="unset";
        
        curso = 3;
        cursos.style.backgroundImage=imagens_curso[curso];
    })
}

//Trabalhamento o overlay de carregamento
document.addEventListener("DOMContentLoaded", function (e){
    //removendo div de overlay
    let loaderoverlay = document.getElementById('loader-overlay');
    loaderoverlay.style.display="none";
});