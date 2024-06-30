window.addEventListener('load', function() {
    const modal = document.getElementById("modal");
    if(modal){
        modal.querySelector(".background").addEventListener("click", e => {
            fecharModal();
        });

        modal.querySelector(".fechar").addEventListener("click", e => {
            fecharModal();
        });

        window.addEventListener("keydown", e => {
            if(e.key.toLowerCase() === "escape"){
                fecharModal()
            }
        });
    }
});

const fecharModal = () => {
    const modal = document.getElementById("modal");
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.visibility = "hidden";
    }, 500);
}

const abrirModal = () => {
    const modal = document.getElementById("modal");
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
}