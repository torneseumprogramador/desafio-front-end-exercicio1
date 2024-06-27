window.addEventListener('load', function() {
    let pagina = 1;
    carregarClientes(pagina);

    const form = document.querySelector("#modal .modal-main .content form");
    if(form){
        form.addEventListener("submit", async e => {
            e.preventDefault();

            let method = 'POST';
            if(Number(e.target.querySelector("#id").value) > 0){
                method = 'PUT';
            }

            const itensDoForm = e.target.querySelectorAll("[name]");

            const dados = {};

            for(item of itensDoForm){
                if(item.tagName.toLowerCase() == "input"){
                    dados[item.name] = item.value;
                }
                else if (item.tagName.toLowerCase() == "select"){
                    dados[item.name] = item.value;
                }
                else if (item.tagName.toLowerCase() == "textarea"){
                    dados[item.name] = item.value;
                }
            }
            

            try {
                const url = "http://localhost/exercicio1/forms.html"
                const resposta = await fetch(url, {
                    method: method,           // Método HTTP
                    headers: {
                    'Content-Type': 'application/json'  // Tipo de conteúdo esperado no corpo da solicitação
                    },
                    body: JSON.stringify(dados) // Converte os dados para JSON string
                });
            
                if (!resposta.ok) {
                    throw new Error('Falha ao enviar dados! Status: ' + resposta.status);
                }
            
                // comentado pois estamos fazendo post para .html
                // const resultado = await resposta.json(); // Assume que o servidor retorna JSON
                fecharModal();
                form.reset();
                const tbody = document.querySelector("#tabela_dinamica tbody");
                // tbody.appendChild() // outra alternativa
                tbody.innerHTML += `
                    <tr>
                        <td>0</td>
                        <td>${dados.nome}</td>
                        <td>${dados.telefone}</td>
                        <td>${dados.endereco}</td>
                        <td>${dados.cidade}</td>
                        <td>${dados.estado}</td>
                        <td><button class="alterar" onclick="alterarDados(this)">Alterar</button></td>
                        <td><button class="excluir" onclick="excluirDados(this)">Excluir</button></td>
                    </tr>
                `;

                dubleClickTr();
            } catch (erro) {
                console.error('Erro na solicitação:', erro);
            }
        });
    }
});


const abrirModalTabelaDinamica = () => {
    const form = document.querySelector("#modal .modal-main .content form");
    form.reset();
    form.querySelector("[name=id]").value = 0;
    abrirModal();
}

const dubleClickTr = () => {
    const trs = document.querySelectorAll("table#tabela_dinamica tbody tr");
    for(tr of trs){
        tr.addEventListener("dblclick", e => {
            alterarDados(e.target);
        })
    }
}

const encontrarAncestral = (elemento, seletor) => {
    while (elemento && elemento !== document.documentElement) {
        if (elemento.matches(seletor)) {
            return elemento;
        }
        elemento = elemento.parentElement;
    }
    return null;
}

const alterarDados = elen => {
    const trSelecionada = encontrarAncestral(elen, "tr");
    const tds = trSelecionada.querySelectorAll("td");
    const dados = {};
    dados.id = tds[0].innerText;
    dados.nome = tds[1].innerText;
    dados.telefone = tds[2].innerText;
    dados.endereco = tds[3].innerText;
    dados.cidade = tds[4].innerText;
    dados.estado = tds[5].innerText;

    abrirModalTabelaDinamica();

    setTimeout(() => {
        const itensDoForm = document.querySelectorAll("#modal .modal-main .content form [name]");
        for(item of itensDoForm){
            item.value = dados[item.name];
        }
    }, 50)
}

const excluirDados = async elen => {
    if(confirm("Confirma exclusão?")){
        const trSelecionada = encontrarAncestral(elen, "tr");
        const td = trSelecionada.querySelector("td:first-child");
        const id = td.innerText;

        try {
            const url = "http://localhost/exercicio1/forms.html?id=" + id
            const resposta = await fetch(url, {
                method: "GET",           // Método HTTP coloquei só para funcionar no mock
                // method: "DELETE",           // Método HTTP, IDEAL PARA API
                headers: {
                    'Content-Type': 'application/json'  // Tipo de conteúdo esperado no corpo da solicitação
                }
            });
        
            if (!resposta.ok) {
                throw new Error('Falha ao enviar dados! Status: ' + resposta.status);
            }

            trSelecionada.remove();
            // dubleClickTr();
        } catch (erro) {
            console.error('Erro na solicitação:', erro);
        }
    }
}
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
                    <td><button class="alterar" onclick="alterarDados(this)">Alterar</button></td>
                    <td><button class="excluir" onclick="excluirDados(this)">Excluir</button></td>
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

        dubleClickTr();

    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

