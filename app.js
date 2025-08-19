let amigos = []; /*array que ira armazenar os nomes dos amigos*/

// Adicionando os nomes dos amigos
function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nome = input.value.trim();

  // Validação que evitar o processamento de campos em vazio
  if (nome === "") {
    alert("Por favor, insira um nome válido!");
    return;
  }

  // Normaliza para checar duplicados
  let nomeNormalizado = nome.toLowerCase();

  // Verifica se já existe (em minúsculo)
  if (amigos.some((amigo) => amigo.toLowerCase() === nomeNormalizado)) {
    alert("Esse nome já foi adicionado");
    return;
  }

  // Adiciona à lista
  amigos.push(nome);
  atualizarLista();

  // Limpa o campo
  input.value = "";
  input.focus();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; //Limpa a lista antes de atualizar

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

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indiceSorteado];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${sorteado}</strong></li>`;

  // Aguarda o DOM renderizar antes de perguntar
  setTimeout(() => {
    const opcao = confirm(
      "OK: continuar com os nomes restantes\nCancelar: criar nova lista"
    );

    if (opcao) {
      // Continua: remove o sorteado e mantém os demais
      amigos.splice(indiceSorteado, 1);
      atualizarLista();

      const restantes = amigos.length;
      const txt =
        restantes === 1 ? "1 nome restante." : `${restantes} nomes restantes.`;
      resultado.innerHTML += `<li>➡️ ${txt}</li>`;
    } else {
      // Nova lista: zera array e limpa resultado
      amigos.length = 0;
      atualizarLista();
      resultado.innerHTML = "";
    }
  }, 300); // tempo curtinho só pra garantir a exibição do sorteado
}

