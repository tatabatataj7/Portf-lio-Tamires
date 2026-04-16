const projetos = [
  {
    nome: "Portfólio Profissional",
    descricao: "Projeto de portfólio pessoal desenvolvido com HTML, CSS e JavaScript para apresentar minhas informações, habilidades e projetos de forma moderna e responsiva.",
    tecnologia: "HTML, CSS e JavaScript",
    link: "https://github.com/tatabatataj7/Portf-lio-Tamires"
  },
  {
    nome: "Projeto em SQL",
    descricao: "Atividade prática criada para treinar acriação de umbanco de dados, estruturas básicas, entrada de dados e organização de código na linguagem SQL.",
    tecnologia: "SQL",
    link: "https://github.com/tatabatataj7/Cl-nica-Odontol-gica-sql"
  },
  {
    nome: "Página Responsiva",
    descricao: "Projeto de página web de um Prototipo de uma venda de bolos caseiros,adaptada para diferentes tamanhos de tela, com foco em layout moderno, organização visual e usabilidade.",
    tecnologia: "HTML e CSS",
    link: "https://github.com/tatabatataj7/Bolaria-e-Arte"
  }
];

const listaProjetos = document.getElementById("lista-projetos");

function renderizarProjetos() {
  listaProjetos.innerHTML = "";

  projetos.forEach((projeto) => {
    const card = document.createElement("div");
    card.classList.add("card-projeto");

    card.innerHTML = `
      <h3>${projeto.nome}</h3>
      <p>${projeto.descricao}</p>
      <p><strong>Tecnologias:</strong> ${projeto.tecnologia}</p>
      <a href="${projeto.link}" target="_blank">Ver projeto</a>
    `;

    listaProjetos.appendChild(card);
  });
}

renderizarProjetos();

const botaoMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const linksMenu = document.querySelectorAll(".menu a");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
});

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("ativo");
  });
});