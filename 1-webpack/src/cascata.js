window.addEventListener('load', function() {
    const estados = document.getElementById("estados");
    if(estados){
        estados.addEventListener('change', function() {
            carregarCidades(this.value);
        });
    }
});

window.carregarCidades = async (estado) => {
    const url = 'api-mock/cidades.json?estado=' + estado;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const data = await response.json();

        let cidadesSelecionadas = [];
        data.forEach(item => {
            if(estado === item.estado){
                cidadesSelecionadas.push(item);
            }
        });

        const cidades = document.getElementById("cidades");
        if(cidadesSelecionadas.length === 0){
            cidades.innerHTML = `<option value="">[Selecione]</option>`;
            return;
        }

        cidades.innerHTML = "";
        cidadesSelecionadas.forEach(cidade => {
            cidades.innerHTML += `
                <option value="${cidade.cidade}">${cidade.cidade}</option>
            `;
        });

    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}
