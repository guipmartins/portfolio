# Portfólio — Guilherme Martins

Este repositório contém o código-fonte do meu portfólio profissional, desenvolvido para reunir informações sobre minha experiência, formação acadêmica, competências técnicas e projetos.

O projeto foi construído com HTML, CSS e JavaScript, sem utilização de frameworks, priorizando uma estrutura simples, responsiva e de fácil manutenção.

**Site:** [guilherme-martins.web.app](https://guilherme-martins.web.app/)

## Sobre o projeto

A proposta do portfólio é apresentar meu trabalho como desenvolvedor de software em um ambiente próprio, reunindo minha trajetória profissional e alguns dos projetos que desenvolvi.

Além de servir como apresentação profissional, o site também é um projeto em evolução, no qual pretendo aplicar melhorias de interface, acessibilidade, desempenho e organização do código.

Atualmente, o portfólio conta com:

- Apresentação pessoal e profissional;
- Informações sobre experiência e formação acadêmica;
- Tecnologias e competências técnicas;
- Projetos desenvolvidos;
- Links para GitHub e LinkedIn;
- Formulário de contato com redirecionamento para o WhatsApp;
- Layout adaptável a diferentes tamanhos de tela.

## Tecnologias

O projeto utiliza as seguintes tecnologias e ferramentas:

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura e conteúdo do site |
| CSS3 | Estilização, organização visual e responsividade |
| JavaScript | Interações e funcionamento do formulário de contato |
| Git | Controle de versão |
| GitHub | Repositório e histórico de desenvolvimento |
| Firebase Hosting | Hospedagem e publicação do site |

O desenvolvimento é realizado no Visual Studio Code.

## Estrutura do repositório

```text
portfolio/
├── img/                 # Imagens utilizadas no site
├── index.html           # Página principal
├── styles.css           # Estilos e responsividade
├── 404.html             # Página de erro
├── firebase.json        # Configuração do Firebase Hosting
├── .firebaserc          # Referência ao projeto Firebase
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md
```

## Executando o projeto

Por se tratar de um site estático, não é necessário instalar dependências ou configurar um ambiente de execução específico.

Clone o repositório:

```bash
git clone https://github.com/guipmartins/portfolio.git
```

Entre no diretório:

```bash
cd portfolio
```

Abra o arquivo `index.html` no navegador. Também é possível utilizar um servidor local, como a extensão Live Server do Visual Studio Code.

## Hospedagem e publicação

O site está hospedado no Firebase Hosting, utilizando o plano gratuito Spark.

A configuração foi realizada por meio do Firebase CLI, com um site de hospedagem específico para o portfólio.

As atualizações podem ser publicadas pelo terminal, desde que o ambiente esteja autenticado e tenha acesso ao projeto Firebase:

```bash
npx firebase-tools deploy --only hosting:portfolio
```

O código-fonte é mantido neste repositório, enquanto a versão publicada fica disponível em:

[guilherme-martins.web.app](https://guilherme-martins.web.app/)

## Próximas melhorias

O projeto continuará recebendo atualizações, principalmente nas seguintes áreas:

- Reformulação da interface e da identidade visual;
- Melhorias na experiência de navegação em dispositivos móveis;
- Aprimoramento da acessibilidade;
- Otimização de imagens e carregamento;
- Revisão do formulário de contato;
- Organização e manutenção do código.

## Autor

**Guilherme Martins**

Desenvolvedor de software com experiência em Python, automação de processos, integração de sistemas e desenvolvimento de soluções para ambientes corporativos.

- [LinkedIn](https://www.linkedin.com/in/jos%C3%A9-guilherme-moreira-pereira-martins/)
- [GitHub](https://github.com/guipmartins)
- [Portfólio](https://guilherme-martins.web.app/)