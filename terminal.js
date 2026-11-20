/* =========================================================
   TERMINAL ANIMADO — Python, JavaScript, TypeScript e C#
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("codigo-digitando");
    const arquivo = document.getElementById("terminal-arquivo");
    const linguagem = document.getElementById("terminal-linguagem");

    if (editor && arquivo && linguagem) {
        const exemplos = [
            {
                arquivo: "developer.py",
                linguagem: "Python",
                codigo: `class SoftwareEngineer:
    def __init__(self):
        self.name = "Guilherme Martins"
        self.stack = ["Python", "SQL", "Docker"]

    def build(self):
        return "Soluções escaláveis"`
            },
            {
                arquivo: "developer.js",
                linguagem: "JavaScript",
                codigo: `const developer = {
    name: "Guilherme Martins",
    stack: ["JavaScript", "Node.js"],

    build() {
        return "Soluções digitais";
    }
};`
            },
            {
                arquivo: "developer.ts",
                linguagem: "TypeScript",
                codigo: `interface Developer {
    name: string;
    stack: string[];
}

const engineer: Developer = {
    name: "Guilherme Martins",
    stack: ["TypeScript", "APIs"]
};`
            },
            {
                arquivo: "Developer.cs",
                linguagem: "C#",
                codigo: `public class Developer
{
    public string Name { get; set; }
        = "Guilherme Martins";

    public string Build()
    {
        return "Soluções robustas";
    }
}`
            }
        ];

        const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)");
        let exemploAtual = 0;
        let caractereAtual = 0;
        let temporizador = null;

        function agendar(funcao, atraso) {
            clearTimeout(temporizador);
            temporizador = setTimeout(funcao, atraso);
        }

        function atualizarCabecalho() {
            const exemplo = exemplos[exemploAtual];
            arquivo.textContent = exemplo.arquivo;
            linguagem.textContent = exemplo.linguagem;
        }

        function digitar() {
            if (document.hidden) {
                agendar(digitar, 500);
                return;
            }

            const codigo = exemplos[exemploAtual].codigo;
            if (caractereAtual < codigo.length) {
                const caractere = codigo[caractereAtual];
                editor.textContent += caractere;
                caractereAtual++;
                const atraso = caractere === "\n" ? 250 : 25 + Math.random() * 45;
                agendar(digitar, atraso);
                return;
            }
            agendar(proximoExemplo, 3000);
        }

        function proximoExemplo() {
            exemploAtual = (exemploAtual + 1) % exemplos.length;
            caractereAtual = 0;
            editor.textContent = "";
            atualizarCabecalho();
            agendar(digitar, 600);
        }

        function iniciar() {
            clearTimeout(temporizador);
            atualizarCabecalho();
            if (movimentoReduzido.matches) {
                editor.textContent = exemplos[exemploAtual].codigo;
                return;
            }
            editor.textContent = "";
            caractereAtual = 0;
            agendar(digitar, 600);
        }

        document.addEventListener("visibilitychange", () => {
            if (!document.hidden && !movimentoReduzido.matches) {
                clearTimeout(temporizador);
                agendar(digitar, 300);
            }
        });
        movimentoReduzido.addEventListener("change", iniciar);
        iniciar();
    }

    /* =========================================================
       FORMULÁRIO DE CONTATO
       Para alterar o e-mail ou WhatsApp, edite apenas CONTATO.
       E-mail: FormSubmit exige confirmação no primeiro envio.
       ========================================================= */
    const CONTATO = {
        email: "joseg.martins@outlook.com",
        whatsapp: "5519995481147"
    };

    const anoAtual = document.getElementById("ano-atual");
    if (anoAtual) anoAtual.textContent = new Date().getFullYear();

    const formulario = document.getElementById("formulario");
    const abas = Array.from(document.querySelectorAll(".contato-aba"));
    const camposEmail = document.getElementById("campos-email");
    const emailRemetente = document.getElementById("email-remetente");
    const assunto = document.getElementById("assunto");
    const botao = document.getElementById("botao-enviar");
    const textoBotao = document.getElementById("texto-botao");
    const feedback = document.getElementById("contato-feedback");
    const observacao = document.getElementById("contato-observacao");
    const painel = document.getElementById("painel-contato");
    if (!formulario || !camposEmail || !emailRemetente || !assunto || !botao) return;

    let canal = "whatsapp";

    function informar(texto, tipo = "") {
        feedback.textContent = texto;
        feedback.className = `contato-feedback ${tipo}`.trim();
    }

    function selecionarCanal(novoCanal) {
        canal = novoCanal;
        const porEmail = canal === "email";
        camposEmail.hidden = !porEmail;
        emailRemetente.disabled = !porEmail;
        assunto.disabled = !porEmail;
        emailRemetente.required = porEmail;
        assunto.required = porEmail;

        abas.forEach(aba => {
            const ativa = aba.dataset.canal === canal;
            aba.classList.toggle("ativa", ativa);
            aba.setAttribute("aria-selected", String(ativa));
            aba.tabIndex = ativa ? 0 : -1;
            if (ativa) painel.setAttribute("aria-labelledby", aba.id);
        });

        textoBotao.textContent = porEmail ? "Enviar por e-mail" : "Enviar pelo WhatsApp";
        botao.querySelector("i").className = porEmail ? "fa-regular fa-envelope" : "fa-brands fa-whatsapp";
        observacao.textContent = porEmail
            ? "A mensagem será enviada para minha caixa de entrada. O primeiro envio pode exigir ativação do serviço."
            : "Você será direcionado ao WhatsApp para confirmar o envio.";
        informar("");
    }

    abas.forEach((aba, indice) => {
        aba.addEventListener("click", () => selecionarCanal(aba.dataset.canal));
        aba.addEventListener("keydown", event => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const proximo = event.key === "Home" ? 0 : event.key === "End" ? abas.length - 1
                : (indice + (event.key === "ArrowRight" ? 1 : -1) + abas.length) % abas.length;
            abas[proximo].focus();
            selecionarCanal(abas[proximo].dataset.canal);
        });
    });

    formulario.addEventListener("submit", async event => {
        event.preventDefault();
        if (!formulario.reportValidity()) return;

        const nome = document.getElementById("nome").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        if (!nome || !mensagem) {
            informar("Preencha seu nome e a mensagem.", "erro");
            return;
        }

        if (canal === "whatsapp") {
            const texto = `Olá! Me chamo ${nome}.\n\n${mensagem}`;
            const url = `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(texto)}`;
            const novaAba = window.open(url, "_blank", "noopener,noreferrer");
            if (!novaAba) window.location.href = url;
            informar("WhatsApp aberto. Confirme o envio da mensagem no aplicativo.", "sucesso");
            return;
        }

        const email = emailRemetente.value.trim();
        const titulo = assunto.value.trim();
        if (!email || !titulo) {
            informar("Preencha seu e-mail e o assunto.", "erro");
            return;
        }

        botao.disabled = true;
        textoBotao.textContent = "Enviando...";
        informar("Aguarde enquanto enviamos sua mensagem.");
        try {
            const dados = new FormData();
            dados.append("name", nome);
            dados.append("email", email);
            dados.append("_replyto", email);
            dados.append("_subject", `Portfólio: ${titulo}`);
            dados.append("message", mensagem);
            dados.append("_captcha", "true");

            const resposta = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTATO.email)}`, {
                method: "POST",
                body: dados,
                headers: { "Accept": "application/json" }
            });
            const retorno = await resposta.json();
            if (!resposta.ok || retorno.success === false || retorno.success === "false") {
                throw new Error(retorno.message || "O serviço não confirmou o recebimento.");
            }
            informar("Solicitação recebida pelo serviço! Se for o primeiro envio, preciso ativar o formulário pelo e-mail de confirmação antes da entrega regular.", "sucesso");
            formulario.reset();
        } catch (erro) {
            informar("Não foi possível confirmar o envio. Tente novamente ou entre em contato pelo WhatsApp.", "erro");
            console.error("Falha no envio de e-mail:", erro);
        } finally {
            botao.disabled = false;
            textoBotao.textContent = "Enviar por e-mail";
        }
    });
    selecionarCanal("whatsapp");
});
