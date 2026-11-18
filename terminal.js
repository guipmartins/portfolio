
document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("codigo-digitando");
    const arquivo = document.getElementById("terminal-arquivo");
    const linguagem = document.getElementById("terminal-linguagem");

    if (!editor || !arquivo || !linguagem) return;

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

    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

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

            const atraso = caractere === "\n"
                ? 250
                : 25 + Math.random() * 45;

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
});
