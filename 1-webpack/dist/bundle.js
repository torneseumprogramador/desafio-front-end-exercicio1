(()=>{var e={126:()=>{window.addEventListener("load",(function(){const t=document.getElementById("estados");t&&t.addEventListener("change",(function(){e(this.value)}))}));const e=async e=>{const t="api-mock/cidades.json?estado="+e;try{const o=await fetch(t);if(!o.ok)throw new Error(`Erro na requisição: ${o.statusText}`);const r=await o.json();let n=[];r.forEach((t=>{e===t.estado&&n.push(t)}));const a=document.getElementById("cidades");if(0===n.length)return void(a.innerHTML='<option value="">[Selecione]</option>');a.innerHTML="",n.forEach((e=>{a.innerHTML+=`\n                <option value="${e.cidade}">${e.cidade}</option>\n            `}))}catch(e){console.error("Erro ao buscar os dados:",e)}}},269:()=>{window.addEventListener("load",(function(){const t=document.getElementById("modal");t&&(t.querySelector(".background").addEventListener("click",(t=>{e()})),t.querySelector(".fechar").addEventListener("click",(t=>{e()})),window.addEventListener("keydown",(t=>{"escape"===t.key.toLowerCase()&&e()})))}));const e=()=>{const e=document.getElementById("modal");e.style.opacity=0,setTimeout((()=>{e.style.visibility="hidden"}),500)}},177:()=>{function e(){let e=document.querySelectorAll("#carrossel .carrossel-container li");for(li of e){li.style.width=window.innerWidth+"px";let e=li.querySelector("img");e.style.display="none";let t=e.src;li.style.backgroundImage="url('"+t+"')",li.style.backgroundSize="cover",li.style.backgroundRepeat="no-repeat",li.style.backgroundPosition="center"}}window.addEventListener("load",(function(){e(),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();try{let e=document.querySelector(this.getAttribute("href"));e&&e.scrollIntoView({behavior:"smooth"})}catch(e){}}))}))})),window.addEventListener("resize",(function(){e()}))},214:()=>{window.addEventListener("load",(function(){o(1);const t=document.querySelector("#modal .modal-main .content form");t&&t.addEventListener("submit",(async o=>{o.preventDefault();let r="POST";Number(o.target.querySelector("#id").value)>0&&(r="PUT");const n=o.target.querySelectorAll("[name]"),a={};for(item of n)("input"==item.tagName.toLowerCase()||"select"==item.tagName.toLowerCase()||"textarea"==item.tagName.toLowerCase())&&(a[item.name]=item.value);try{const o="http://localhost/exercicio1/forms.html",n=await fetch(o,{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!n.ok)throw new Error("Falha ao enviar dados! Status: "+n.status);fecharModal(),t.reset(),document.querySelector("#tabela_dinamica tbody").innerHTML+=`\n                    <tr>\n                        <td>0</td>\n                        <td>${a.nome}</td>\n                        <td>${a.telefone}</td>\n                        <td>${a.endereco}</td>\n                        <td>${a.cidade}</td>\n                        <td>${a.estado}</td>\n                        <td><button class="alterar" onclick="alterarDados(this)">Alterar</button></td>\n                        <td><button class="excluir" onclick="excluirDados(this)">Excluir</button></td>\n                    </tr>\n                `,e()}catch(e){console.error("Erro na solicitação:",e)}}))}));const e=()=>{const e=document.querySelectorAll("table#tabela_dinamica tbody tr");for(tr of e)tr.addEventListener("dblclick",(e=>{t(e.target)}))},t=e=>{const t=((e,t)=>{for(;e&&e!==document.documentElement;){if(e.matches(t))return e;e=e.parentElement}return null})(e,"tr").querySelectorAll("td"),o={};o.id=t[0].innerText,o.nome=t[1].innerText,o.telefone=t[2].innerText,o.endereco=t[3].innerText,o.cidade=t[4].innerText,o.estado=t[5].innerText,(()=>{const e=document.querySelector("#modal .modal-main .content form");e.reset(),e.querySelector("[name=id]").value=0,abrirModal()})(),setTimeout((()=>{const e=document.querySelectorAll("#modal .modal-main .content form [name]");for(item of e)item.value=o[item.name]}),50)},o=async t=>{const o=document.querySelector("table#tabela_dinamica tbody");if(!o)return;const r=`api-mock/clientes_pg${t}.json`;try{const t=await fetch(r);if(!t.ok)throw new Error(`Erro na requisição: ${t.statusText}`);const n=await t.json();if(o.innerHTML="",0===n.registros.length)return void(o.innerHTML='\n                <tr>\n                    <td style="text-align:center" colspan="6">Nenhum cliente encontrado</td>\n                </tr>\n            ');n.registros.forEach((e=>{o.innerHTML+=`\n                <tr>\n                    <td>${e.id}</td>\n                    <td>${e.nome}</td>\n                    <td>${e.telefone}</td>\n                    <td>${e.endereco}</td>\n                    <td>${e.cidade}</td>\n                    <td>${e.estado}</td>\n                    <td><button class="alterar" onclick="alterarDados(this)">Alterar</button></td>\n                    <td><button class="excluir" onclick="excluirDados(this)">Excluir</button></td>\n                </tr>\n            `}));const a=document.getElementById("pagination");let c="";for(let e=1;e<=4;e++)n.pagina_corrente==e?c+=`<a href="javascript:;" class="active">${e}</a>`:c+=`<a href="javascript:carregarClientes(${e})">${e}</a>`;let i=`<a href="javascript:carregarClientes(${n.pagina_corrente-1})">&laquo; Anterior</a>`,d=`<a href="javascript:carregarClientes(${n.pagina_corrente+1})">Próximo &raquo;</a>`;1===n.pagina_corrente&&(i='<a href="javascript:;" class="disabled">&laquo; Anterior</a>'),n.pagina_corrente===n.total_de_paginas&&(d='<a href="javascript:;" class="disabled">Próximo &raquo;</a>'),a.innerHTML=`\n            ${i}\n            ${c}\n            ${d}\n        `,e()}catch(e){console.error("Erro ao buscar os dados:",e)}}},342:()=>{window.addEventListener("load",(function(){const e=document.querySelectorAll("*[validador]");for(campo of e){const e=e=>{""==e.target.value?e.target.classList.add("bordaVermelha"):e.target.classList.remove("bordaVermelha")};campo.addEventListener("keyup",e),campo.addEventListener("focus",e),campo.addEventListener("change",e)}}));const e=document.querySelector("form");e&&e.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelectorAll("*[validador]");for(campo of t){campo.classList.remove("bordaVermelha");let e=!0;switch(campo.tagName){case"INPUT":case"SELECT":if(""==campo.value){e=!1;let t=campo.getAttribute("validador");campo.classList.add("bordaVermelha"),alert(t),campo.focus()}break;case"DIV":let t=campo.querySelectorAll("input"),o=!0;for(input of t){if(input.checked){o=!0;break}o=!1}if(!o){campo.classList.add("bordaVermelha");let t=campo.getAttribute("validador");alert(t),e=!1}}if(!e)return}e.target.submit()}))}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(126),o(269),o(177),o(214),o(342)})()})();