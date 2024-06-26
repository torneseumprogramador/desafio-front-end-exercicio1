window.addEventListener('load', function() {
    let pagina = 1;
    carregarClientes(pagina);
});

const carregarClientes = async (pagina) => {
    const url = `api-mock/clientes_pg${pagina}.json`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        const resultadoApi = await response.json();
        const tbody = document.querySelector("table#tabela_dinamica tbody");
        tbody.innerHTML = "";
        if(resultadoApi.registros.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td style="text-align:center" colspan="6">Nenhum cliente encontrado</td>
                </tr>
            `;
            return;
        }

        resultadoApi.registros.forEach(cliente => {
            tbody.innerHTML += `
                <tr>
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.telefone}</td>
                    <td>${cliente.endereco}</td>
                    <td>${cliente.cidade}</td>
                    <td>${cliente.estado}</td>
                </tr>
            `
        });

        const pg = document.getElementById("pagination");
        let itens = "";
        for(let i=1; i<=4; i++){
            if(resultadoApi.pagina_corrente == i){
                itens += `<a href="javascript:;" class="active">${i}</a>`
            }
            else {
                itens += `<a href="javascript:carregarClientes(${i})">${i}</a>`
            }
        }

        let htmlAnterior = `<a href="javascript:carregarClientes(${resultadoApi.pagina_corrente - 1})">&laquo; Anterior</a>`;
        let htmlProximo = `<a href="javascript:carregarClientes(${resultadoApi.pagina_corrente + 1})">Próximo &raquo;</a>`;
        
        if(resultadoApi.pagina_corrente === 1){
            htmlAnterior = `<a href="javascript:;" class="disabled">&laquo; Anterior</a>`;
        }
        if(resultadoApi.pagina_corrente === resultadoApi.total_de_paginas){
            htmlProximo = `<a href="javascript:;" class="disabled">Próximo &raquo;</a>`;
        }

        pg.innerHTML = `
            ${ htmlAnterior }
            ${ itens }
            ${ htmlProximo }
        `;

    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}
