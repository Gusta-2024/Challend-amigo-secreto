
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById('nomeAmigo');
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido!");
        return;
    }

    ley li = document.createElement("li");
    li.textContent = nome;

    let lista = document.getElementById("listaAmigos");
    lista.appendChild(li);

    input.value = "";
    input.foucus();
}

