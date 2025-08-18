
let amigos = []; /*array que ira armazenar os nomes dos amigos*/

/*adicionando os nomes dos amigos*/
function adicionarAmigo() {
    let input = document.getElementById('nomeAmigo');
    let nome = input.value.trim();

/*validação que evitar o processamento de campos em vazio*/
    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }
/*função para evitar a inserção de nomes duplicados*/

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado");
        return;
    }

    /* Adiciona à lista*/
    amigos.push(nome);
    atualizarLista();

    /* Limpa o campo*/
    input.value = "";
    input.focus();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; /*Limpa a lista antes de atualizar*/

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<li>🎉 O amigo secreto sorteado foi: <strong>${sorteado}</strong></li>";
}


