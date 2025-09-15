function copiarTexto(texto) {
  navigator.clipboard.writeText(texto)
    .then(() => {
      mostrarMensagem("E-mail copiado com sucesso!", "green");
    })
    .catch(err => {
      mostrarMensagem("Erro ao copiar o texto.", "red");
      console.error("Erro ao copiar o texto: ", err);
    });
}

function mostrarMensagem(msg, cor) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = msg;
  mensagem.style.color = cor;
  mensagem.style.display = "block";

  // Esconde depois de 2 segundos
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 2000);
}
