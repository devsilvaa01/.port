/* =========================================================
   TRADUÇÕES
========================================================= */

const translations = {

  "pt-BR": {

    pageTitle:
      "Dev Silva | Desenvolvedor Full Stack",

    navHome:
      "Início",

    navAbout:
      "Sobre",

    navTech:
      "Tecnologias",

    navProjects:
      "Projetos",

    navContact:
      "Contato",


    heroTag:
      "// DESENVOLVEDOR FULL STACK EM FORMAÇÃO",

    heroHello:
      "Olá,",

    heroIAm:
      "eu sou o ",

    heroDescription:
      "Estudante de Engenharia de Software construindo minha jornada no desenvolvimento web, transformando ideias em projetos através da tecnologia.",

    aboutButton:
      "Sobre mim",

    contactButton:
      "Fala comigo",


    boraDescription:
      "Use meu cupom e aproveite 20% OFF.",

    boraAccess:
      "Acessar ↗",

    couponLabel:
      "CUPOM",

    copyCoupon:
      "Copiar código",

    copied:
      "Código copiado!",


    aboutTag:
      "// 01 / SOBRE MIM",

    aboutTitleOne:
      "Construindo minha",

    aboutTitleTwo:
      "jornada.",

    aboutText1:
      "Sou estudante de Engenharia de Software e atualmente estou construindo minha trajetória como desenvolvedor.",

    aboutText2:
      "Comecei pelos fundamentos do desenvolvimento web, estudando HTML, CSS e JavaScript e criando projetos para transformar conhecimento em prática.",

    aboutText3:
      "Meu objetivo é continuar evoluindo no desenvolvimento Full Stack e construir soluções cada vez mais completas.",

    highlightLabel:
      "FOCO ATUAL",

    highlightText:
      "JavaScript, projetos reais e evolução contínua.",


    techTag:
      "// 02 / TECNOLOGIAS",

    techTitleOne:
      "Ferramentas que",

    techTitleTwo:
      "utilizo.",

    htmlDesc:
      "Estrutura web",

    cssDesc:
      "Estilização e layout",

    jsDesc:
      "Interatividade",

    gitDesc:
      "Versionamento",

    githubDesc:
      "Projetos e código",

    vscodeDesc:
      "Editor de código",


    projectTag:
      "// 03 / PROJETO",

    projectTitleOne:
      "Um projeto que",

    projectTitleTwo:
      "já desenvolvi.",

    projectDescription:
      "Aplicação web desenvolvida para criação e gerenciamento de clientes, serviços e orçamentos, com cálculo automático, histórico, geração de PDF e compartilhamento pelo WhatsApp.",

    viewProject:
      "Ver projeto",


    contactTag:
      "// 04 / CONTATO",

    contactTitleOne:
      "Vamos construir",

    contactTitleTwo:
      "algo juntos?",

    contactDescription:
      "Estou aberto a oportunidades, projetos e conexões na área de tecnologia."

  },


  "en": {

    pageTitle:
      "Dev Silva | Full Stack Developer",

    navHome:
      "Home",

    navAbout:
      "About",

    navTech:
      "Technologies",

    navProjects:
      "Projects",

    navContact:
      "Contact",


    heroTag:
      "// FULL STACK DEVELOPER IN TRAINING",

    heroHello:
      "Hello,",

    heroIAm:
      "I'm ",

    heroDescription:
      "Software Engineering student building my path in web development, turning ideas into projects through technology.",

    aboutButton:
      "About me",

    contactButton:
      "Let's talk",


    boraDescription:
      "Use my coupon and get 20% OFF.",

    boraAccess:
      "Access ↗",

    couponLabel:
      "COUPON",

    copyCoupon:
      "Copy code",

    copied:
      "Code copied!",


    aboutTag:
      "// 01 / ABOUT ME",

    aboutTitleOne:
      "Building my",

    aboutTitleTwo:
      "journey.",

    aboutText1:
      "I'm a Software Engineering student currently building my path as a developer.",

    aboutText2:
      "I started with web development fundamentals, studying HTML, CSS and JavaScript while creating projects to turn knowledge into practice.",

    aboutText3:
      "My goal is to keep evolving in Full Stack development and build increasingly complete solutions.",

    highlightLabel:
      "CURRENT FOCUS",

    highlightText:
      "JavaScript, real projects and continuous growth.",


    techTag:
      "// 02 / TECHNOLOGIES",

    techTitleOne:
      "Tools I",

    techTitleTwo:
      "use.",

    htmlDesc:
      "Web structure",

    cssDesc:
      "Styling and layout",

    jsDesc:
      "Interactivity",

    gitDesc:
      "Version control",

    githubDesc:
      "Projects and code",

    vscodeDesc:
      "Code editor",


    projectTag:
      "// 03 / PROJECT",

    projectTitleOne:
      "A project",

    projectTitleTwo:
      "I built.",

    projectDescription:
      "Web application developed to manage clients, services and quotes, with automatic calculations, history, PDF generation and WhatsApp sharing.",

    viewProject:
      "View project",


    contactTag:
      "// 04 / CONTACT",

    contactTitleOne:
      "Let's build",

    contactTitleTwo:
      "something together?",

    contactDescription:
      "I'm open to opportunities, projects and connections in technology."

  }

};


/* =========================================================
   ELEMENTOS
========================================================= */

const nav =
  document.querySelector(".nav");

const menuButton =
  document.querySelector(".menu-button");

const navLinks =
  document.querySelectorAll(".nav-link");

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const languageButtons =
  document.querySelectorAll(
    ".language-button"
  );

const botaoCopiar =
  document.getElementById(
    "copiarCupom"
  );

const cupom =
  document.getElementById(
    "cupomBora"
  );

const feedback =
  document.getElementById(
    "feedbackCupom"
  );


/* =========================================================
   FECHAR MENU
========================================================= */

function fecharMenu() {

  if (
    !nav ||
    !menuButton
  ) {
    return;
  }

  nav.classList.remove(
    "open"
  );

  menuButton.classList.remove(
    "active"
  );

  menuButton.setAttribute(
    "aria-expanded",
    "false"
  );

  menuButton.setAttribute(
    "aria-label",
    "Abrir menu"
  );

}


/* =========================================================
   MENU MOBILE
========================================================= */

if (
  menuButton &&
  nav
) {

  menuButton.addEventListener(
    "click",
    function () {

      const aberto =
        nav.classList.toggle(
          "open"
        );

      menuButton.classList.toggle(
        "active",
        aberto
      );

      menuButton.setAttribute(
        "aria-expanded",
        aberto
          ? "true"
          : "false"
      );

      menuButton.setAttribute(
        "aria-label",
        aberto
          ? "Fechar menu"
          : "Abrir menu"
      );

    }
  );


  navLinks.forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {

          fecharMenu();

        }
      );

    }
  );

}


/* =========================================================
   LINK ATIVO
========================================================= */

function ativarLink(
  id
) {

  navLinks.forEach(
    function (link) {

      const href =
        link.getAttribute(
          "href"
        );

      link.classList.toggle(
        "active",
        href === `#${id}`
      );

    }
  );

}


navLinks.forEach(
  function (link) {

    link.addEventListener(
      "click",
      function () {

        const id =
          link
            .getAttribute(
              "href"
            )
            .replace(
              "#",
              ""
            );

        ativarLink(
          id
        );

      }
    );

  }
);


/* =========================================================
   MENU AO ROLAR
========================================================= */

function atualizarMenu() {

  let secaoAtual =
    "inicio";

  const posicao =
    window.scrollY + 180;


  sections.forEach(
    function (section) {

      if (
        posicao >=
        section.offsetTop
      ) {

        secaoAtual =
          section.id;

      }

    }
  );


  ativarLink(
    secaoAtual
  );

}


window.addEventListener(
  "scroll",
  atualizarMenu,
  {
    passive: true
  }
);


/* =========================================================
   IDIOMA
========================================================= */

function aplicarIdioma(
  idioma
) {

  const idiomaAtual =
    translations[
      idioma
    ] ||
    translations[
      "pt-BR"
    ];


  document.documentElement.lang =
    idioma;


  document.title =
    idiomaAtual.pageTitle;


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(
      function (elemento) {

        const chave =
          elemento.dataset.i18n;


        if (
          Object.prototype.hasOwnProperty.call(
            idiomaAtual,
            chave
          )
        ) {

          elemento.textContent =
            idiomaAtual[chave];

        }

      }
    );


  languageButtons.forEach(
    function (button) {

      button.classList.toggle(
        "active",
        button.dataset.language ===
          idioma
      );

    }
  );


  localStorage.setItem(
    "devSilvaIdioma",
    idioma
  );

}


languageButtons.forEach(
  function (button) {

    button.addEventListener(
      "click",
      function () {

        const idioma =
          button.dataset.language;

        aplicarIdioma(
          idioma
        );

      }
    );

  }
);


/* =========================================================
   COPIAR CUPOM
========================================================= */

if (
  botaoCopiar &&
  cupom &&
  feedback
) {

  botaoCopiar.addEventListener(
    "click",
    async function () {

      try {

        await navigator.clipboard.writeText(
          cupom.textContent.trim()
        );


        const idioma =
          localStorage.getItem(
            "devSilvaIdioma"
          ) === "en"
            ? "en"
            : "pt-BR";


        botaoCopiar.querySelector(
          "span"
        ).textContent =
          idioma === "en"
            ? "Copied ✓"
            : "Copiado ✓";


        feedback.textContent =
          translations[
            idioma
          ].copied;


        feedback.classList.add(
          "show"
        );


        setTimeout(
          function () {

            botaoCopiar.querySelector(
              "span"
            ).textContent =
              translations[
                idioma
              ].copyCoupon;


            feedback.classList.remove(
              "show"
            );

          },
          2000
        );


      } catch (erro) {

        console.error(
          "Não foi possível copiar o cupom.",
          erro
        );

      }

    }
  );

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

const idiomaSalvo =
  localStorage.getItem(
    "devSilvaIdioma"
  );


aplicarIdioma(
  idiomaSalvo === "en"
    ? "en"
    : "pt-BR"
);


atualizarMenu();