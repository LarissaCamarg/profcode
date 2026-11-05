
// Array para armazenar os alunos cadastrados
let alunos = [];


// FUNÇÃO PARA CADASTRAR ALUNO
function cadastrar() {

    // Obter os valores digitados
    const nome = document.getElementById('nome').value.trim();
    const rgm = document.getElementById('rgm').value.trim();

    const n1 = parseFloat(document.getElementById('provaParcial').value);
    const n2 = parseFloat(document.getElementById('exercicios').value);
    const n3 = parseFloat(document.getElementById('projetoGrupos').value);
    const n4 = parseFloat(document.getElementById('provaRegimental').value);

    const mensagem = document.getElementById('mensagem');

    // Validar os campos
    if (
        !nome ||
        !rgm ||
        isNaN(n1) ||
        isNaN(n2) ||
        isNaN(n3) ||
        isNaN(n4)
    ) {
        mensagem.style.color = "red";
        mensagem.textContent = "Por favor, preencha todos os campos!";
        return;
    }

    // Validar as notas
    if (
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10 ||
        n4 < 0 || n4 > 10
    ) {
        mensagem.style.color = "red";
        mensagem.textContent = "As notas devem estar entre 0 e 10!";
        return;
    }

    // Calcular a nota final
    const notaFinal = n1 + n2 + n3 + n4;

    // Determinar o conceito
    let conceito = "";
    let classeCss = "";

    if (notaFinal >= 6) {

        conceito = "Aprovado";
        classeCss = "aprovado";

    } else if (notaFinal <= 2.5) {

        conceito = "Reprovado";
        classeCss = "reprovado";

    } else {

        conceito = "Avaliação Final";
        classeCss = "avaliacao-final";

    }

    // Criar o objeto aluno
    let aluno = {
        nome: nome,
        rgm: rgm,
        provaParcial: n1,
        exercicios: n2,
        projetoGrupos: n3,
        provaRegimental: n4,
        notaFinal: notaFinal,
        conceito: conceito,
        classeCss: classeCss
    };

    // Adicionar o aluno ao array
    alunos.push(aluno);

    // Limpar o formulário
    document.getElementById('formAluno').reset();

    // Exibir mensagem
    mensagem.style.color = "green";
    mensagem.textContent = "Aluno cadastrado com sucesso!";

}


// FUNÇÃO PARA MOSTRAR OS ALUNOS
function mostrarAlunos() {

    const divLista = document.getElementById('lista-alunos');

    // Verificar se existe algum aluno cadastrado
    if (alunos.length === 0) {

        divLista.innerHTML = `
            <h3>Lista de todos os alunos:</h3>
            <p class="aviso">Nenhum aluno cadastrado até o momento.</p>
        `;

        return;
    }

    // Título da lista
    let html = "<h3>Lista de todos os alunos:</h3>";

    // Percorrer o array de alunos
    for (let i = 0; i < alunos.length; i++) {

        let aluno = alunos[i];

        html += `
            <div class="card-aluno">

                <p>
                    <strong>${i + 1} - ${aluno.nome}</strong>
                </p>

                <p>
                    RGM: ${aluno.rgm},
                    Notas: Parcial: ${aluno.provaParcial} |
                    Exercícios: ${aluno.exercicios}
                </p>

                <p>
                    Projeto: ${aluno.projetoGrupos} |
                    Regimental: ${aluno.provaRegimental}
                </p>

                <p>
                    Nota Final: ${aluno.notaFinal.toFixed(2)}
                </p>

                <p>
                    Conceito:
                    <span class="${aluno.classeCss}">
                        ${aluno.conceito.toUpperCase()}
                    </span>
                </p>

            </div>
        `;
    }

    // Mostrar todos os cards na tela
    divLista.innerHTML = html;

}
