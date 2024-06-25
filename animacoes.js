const animacaoH1MoveBotton = () =>{
    let count = 0;
    let interval = setInterval(() => {
        let h1 = document.querySelector("main h1");
        h1.style.marginTop = count + "px";
        count += 10;
        if (count > 150) {
            clearInterval(interval);
            animacaoRotate(h1);
        }
    }, 80);
}

const animacaoRotate = (h1) => {
    let count = 0;
    setInterval(() => {
        h1.style.transform = "rotate(" + count + "deg)";
        count += 10;
        if (count > 500) {
            mudaCor(h1);
        }
    }, 100);
}

const mudaCor = (h1) => {
    let vermelho = "red";
    setInterval(() => {
        h1.style.backgroundColor = vermelho;
        if(vermelho == "red"){
            vermelho = "yellow";
        }
        else{
            vermelho = "red";
        }
    }, 100);
}

window.addEventListener('load', function() {
    animacaoH1MoveBotton();
});