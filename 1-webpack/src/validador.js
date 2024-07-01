// const validar_form1 = () => {
//     const inputText = document.getElementById("inputText");
//     if(inputText.value == ""){
//         alert('O campo inputText não está preenchido');
//         inputText.focus();
//         return false;
//     }

//     return true;
// }

// const validar_form2 = (e) => {
//     e.preventDefault();
//     const inputText = document.getElementById("inputText");
//     if(inputText.value == ""){
//         alert('O campo inputText não está preenchido');
//         inputText.focus();
//         return;
//     }

//     e.target.submit();
// }

/*const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = document.getElementById("inputText");
    if(inputText.value == ""){
        alert('O campo inputText não está preenchido');
        inputText.focus();
        return;
    }

    const inputPassword = document.getElementById("inputPassword");
    if(inputPassword.value == ""){
        alert('O campo inputPassword não está preenchido');
        inputPassword.focus();
        return;
    }

    // const inputRadio1 = document.getElementById("inputRadio1");
    // const inputRadio2 = document.getElementById("inputRadio2");
    // if(!inputRadio1.checked && !inputRadio2.checked){
    //     alert('O campo inputRadio não foi selecionado, escolha a opção 1 ou 2');
    //     return;
    // }

    const inputRadioCheckeds = document.querySelectorAll("input[name=inputRadio]:checked")
    if(inputRadioCheckeds.length == 0){
        alert('O inputRadio não foi selecionado, escolha a opção 1 ou 2');
        return;
    }

    const inputCheckboxCheckeds = document.querySelectorAll("input[type=checkbox].jsValidar:checked")
    if(inputCheckboxCheckeds.length == 0){
        alert('Selecione pelo menos uma opção no checkbox');
        return;
    }

    const select = document.querySelector("#select")
    if(select.value == ""){
        alert('Selecione uma opção do select');
        return;
    }


    // const selectMult = document.querySelector("#selectMult")
    // const options = selectMult.options;
    
    // let selecteds = []
    // for (option of options) {
    //     if (option.selected) {
    //         selecteds.push(option)
    //     }
    // }

    // if(selecteds.length == 0){
    //     alert('Selecione uma opção do selectMult');
    //     return;
    // }

    const selectMultOptions = document.querySelectorAll("#selectMult option:checked")
    if(selectMultOptions.length == 0){
        alert('Selecione pelo menos uma opção no selectMult');
        return;
    }

    e.target.submit();
});*/


window.addEventListener('load', function() {
    const listaCampos = document.querySelectorAll("*[validador]");
    for(campo of listaCampos){
        const funcaoValidar = (e) => {
            if(e.target.value == ""){
                e.target.classList.add("bordaVermelha");
            }
            else{
                e.target.classList.remove("bordaVermelha");
            }
        }
        campo.addEventListener('keyup', funcaoValidar);
        campo.addEventListener('focus', funcaoValidar);
        campo.addEventListener('change', funcaoValidar);
    }

});

const form = document.querySelector("form");
if(form){
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const listaCampos = document.querySelectorAll("*[validador]");
        for(campo of listaCampos){
            campo.classList.remove("bordaVermelha");
            let validado = true;
            
            switch(campo.tagName){
                case "INPUT":
                case "SELECT":
                    if(campo.value == ""){
                        validado = false;
                        let mensagem = campo.getAttribute("validador");
                        campo.classList.add("bordaVermelha");
                        alert(mensagem);
                        campo.focus();
                    }
                    break;
                case "DIV":
                    let inputs = campo.querySelectorAll("input");
                    let checked = true;
                    for(input of inputs){
                        if(input.checked){
                            checked = true;
                            break;
                        }
                        else{
                            checked = false;
                        }
                    }

                    if (!checked){
                        campo.classList.add("bordaVermelha");
                        let mensagem = campo.getAttribute("validador");
                        alert(mensagem);
                        validado = false;
                    }
                    break;
            }

            if(!validado) return;
        }

        e.target.submit();
    });
}