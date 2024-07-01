window.setCookie = function(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
window.getCookie = function(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}



window.setLocalStorage = function(key, value) {
    localStorage.setItem(key, value);
}
window.getLocalStorage = function(key) {
    return localStorage.getItem(key);
}


window.setSessionStorage = function(key, value, seconds) {
    const now = new Date();

    // Cria um item com a hora de expiração
    const item = {
        value: value,
        expiry: now.getTime() + seconds * 1000,
    };

    sessionStorage.setItem(key, JSON.stringify(item));
}

window.getSessionStorage = function(key) {
    const itemStr = sessionStorage.getItem(key);

    // Se o item não existir, retorna null
    if (!itemStr) {
        return null;
    }

    const item = JSON.parse(itemStr);
    const now = new Date();

    // Verifica se o item expirou
    if (now.getTime() > item.expiry) {
        sessionStorage.removeItem(key);
        return null;
    }

    return item.value;
}

