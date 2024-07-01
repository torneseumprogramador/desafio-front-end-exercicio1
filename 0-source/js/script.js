
function ajustaImagens(){
    let lis = document.querySelectorAll('#carrossel .carrossel-container li');
    for(li of lis){
        li.style.width = window.innerWidth + "px";
        let imgTag = li.querySelector("img");
        imgTag.style.display = "none";
        let img = imgTag.src
        li.style.backgroundImage = "url('" + img + "')";
        li.style.backgroundSize = "cover";
        li.style.backgroundRepeat = "no-repeat";
        li.style.backgroundPosition = "center";
    }
}

function anterior(){
    document.querySelector('#carrossel div').scrollLeft -= window.innerWidth
}

function proximo(){
    document.querySelector('#carrossel div').scrollLeft += window.innerWidth
}

function abrirMenu(button){
    let menu = document.getElementById("menu");
    if( ! menu.classList.contains("menu-aberto") ){
        menu.classList.add("menu-aberto");

        button.classList.add("botao-aberto");
    }
    else {
        let opacity = 1;
        let transicao_opacidade_intervalo = setInterval(()=>{
            opacity -= 0.1;
            menu.style.cssText = `opacity: ${opacity} !important;`;
            if(opacity < -2){
                menu.classList.remove("menu-aberto");
                menu.style.cssText = '';
                clearInterval(transicao_opacidade_intervalo)
            }
        }, 30);

        button.classList.remove("botao-aberto");
    }
}

function animacaoAncoras() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            try{
                let item = document.querySelector(this.getAttribute('href'));
                if(item){
                    item.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            catch(e) { } 
        });
    });
}

window.addEventListener('load', function() {
    ajustaImagens();
    animacaoAncoras();
});

window.addEventListener('resize', function() {
    ajustaImagens();
});