const verificaTeclado = (e) => {
    console.log(e.key)
    console.log(e.keyCode)

    if(e.keyCode == 13){
        alert('oiii')
    }
}

const mascaraCep = (e) => {
    let value = e.target.value;

    if (value.indexOf('-') !== -1 && value.indexOf('-') !== 5) {
        value = value.replace(/-/g, '');
    }

    const cleanedValue = value.replace(/[^0-9-]/g, '');

    const formattedValue = cleanedValue.replace(/^(\d{5})(\d{0,3})$/, (match, p1, p2) => {
        return p2 ? `${p1}-${p2}` : p1;
    });

    e.target.value = formattedValue.substring(0, 9);
}

const mascaraCpf = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > 9) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else if (value.length > 6) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3}).*/, '$1.$2.$3');
    } else if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d{3}).*/, '$1.$2');
    } else if (value.length > 0) {
        value = value.replace(/^(\d{3}).*/, '$1');
    }

    e.target.value = value;
}

function mascara(event) { const input = event.target;
    const format = input.getAttribute('format');
    const value = input.value.replace(/\D/g, ''); // Remove all non-digit characters
    let formattedValue = '';
    let valueIndex = 0;

    for (let i = 0; i < format.length; i++) {
        console.log(format[i]);
        if (format[i] === '9') {
            if (valueIndex < value.length) {
                formattedValue += value[valueIndex];
                valueIndex++;
            } else {
                break;
            }
        } else {
            formattedValue += format[i];
        }
    }

    input.value = formattedValue;
}
