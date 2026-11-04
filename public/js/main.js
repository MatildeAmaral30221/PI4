// Menu para telemovel
const botaoMenu = document.querySelector(".mobile-menu");
const navegacao = document.querySelector(".site-header nav");

if (botaoMenu && navegacao) {
  botaoMenu.addEventListener("click", () => {
    const aberto = navegacao.classList.toggle("nav-open");
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    botaoMenu.querySelector('[data-icone="abrir"]').hidden = aberto;
    botaoMenu.querySelector('[data-icone="fechar"]').hidden = !aberto;
  });
}

// Menu "Questões"
const menuQuestoes = document.querySelector(".questions-menu");

if (menuQuestoes) {
  const botaoQuestoes = menuQuestoes.querySelector("button");

  const definirQuestoes = (aberto) => {
    menuQuestoes.classList.toggle("open", aberto);
    botaoQuestoes.classList.toggle("active", aberto);
    botaoQuestoes.setAttribute("aria-expanded", aberto);
  };

  botaoQuestoes.addEventListener("click", () => {
    definirQuestoes(!menuQuestoes.classList.contains("open"));
  });

  document.addEventListener("click", (evento) => {
    if (!menuQuestoes.contains(evento.target)) definirQuestoes(false);
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") definirQuestoes(false);
  });
}

// Os formulários ainda não estão ligados a nenhum serviço
document.querySelectorAll("form[data-sem-envio]").forEach((formulario) => {
  formulario.addEventListener("submit", (evento) => evento.preventDefault());
});
