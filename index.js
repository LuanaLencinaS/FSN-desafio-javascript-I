// Base a ser utilizada
const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];


// implementação

//FUNÇÃO #1
function adicionarAluno(nomeAluno) {
    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
        E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
        A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/
    var novoAluno = {
        nome: nomeAluno,
        notas: [],
        cursos: [],
        faltas: 0
    }

    if (alunosDaEscola.length != (alunosDaEscola.push(novoAluno))) {
        console.log("Aluno cadastrado");
    }
}

//FUNÇÃO #2
function listarAlunos() {
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    console.log("------------------Alunos-----------------\n");
    alunosDaEscola.map((aluno) => {
        for (prop in aluno) {
            if (prop == "cursos") {
                let cursos = aluno.cursos;
                if (cursos.length > 0) {
                    console.log("cursos: ");
                    for (valor of cursos) {
                        for (propCurso in valor) {
                            if (propCurso == "dataMatricula") {
                                let data = valor[propCurso];

                                let dia = data.getDate();
                                let mes = (data.getMonth() + 1); //0 = janeiro
                                let ano = data.getFullYear();
                                let dataFormatada = [dia, mes, ano];
                                let stringDataFormatada = dataFormatada.join("/");

                                let semana = data.getDay() //0 = domingo

                                let hora = data.getHours(); //hora
                                let minutos = data.getMinutes(); //minuto
                                let segundos = data.getSeconds(); //segundos
                                let horaFormatada = [hora, minutos, segundos];
                                let stringHoraFormatada = horaFormatada.join(":");

                                let arraySemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

                                let dataMatriculaFormatada = stringDataFormatada + " " + stringHoraFormatada + " " + arraySemana[semana];
                                console.log("   " + propCurso + ": " + dataMatriculaFormatada);

                            } else if (propCurso == "nomeDoCurso") {
                                console.log("   " + propCurso + ": " + valor[propCurso]);
                            }
                        }
                    }
                } else if (cursos.length == 0 || cursos.length < 0) {
                    console.log("cursos: Não matriculado em nenhum curso");
                }

            } else if (prop == "notas") {
                let notas = aluno.cursos;
                if (notas.length > 0) {
                    console.log(prop + ": " + aluno[prop]);
                } else if (notas.length == 0 || notas.length < 0) {
                    console.log("notas: Ainda sem notas");
                }

            } else {
                console.log(prop + ": " + aluno[prop]);
            }
        }
        console.log("\n");
    })
    console.log("-----------------------------------------");
}
/* chamada da função
listarAlunos();
*/

//FUNÇÃO #3
function buscarAluno(nomeAluno) {
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */

    for (aluno of alunosDaEscola) {
        let nome = aluno.nome;
        if (nome.indexOf(nomeAluno) != -1) {
            console.log("Aluno encontrado");
            return aluno;
        }
    }

    console.log("Aluno não cadastrado");
    return false;
}

//FUNÇÃO #ADICIONAL
function indiceAluno(nomeAluno) {
    /* Função adicional: Retorna o indice do aluno buscado */
    let cont = 0;
    for (aluno of alunosDaEscola) {
        let nome = aluno.nome;
        if (nome.indexOf(nomeAluno) != -1) {
            return cont;
        }
        cont++;
    }
    return false;
}

//FUNÇÃO #4
function matricularAluno(aluno, curso) { //obj, string
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */

    if ((indiceAluno(aluno.nome)) != false) {
        alunosDaEscola[indiceAluno(aluno.nome)].cursos.push({
            nomeDoCurso: curso,
            dataMatricula: new Date
        })
    }
}
/*
chamada da funçao
matricularAluno({
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
    }, "Front");
    listarAlunos();
    */

    //FUNÇÃO #5
function aplicarFalta(aluno) { //objeto
    /*
        Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */
    if ((indiceAluno(aluno.nome)) != false) {
        if (alunosDaEscola[indiceAluno(aluno.nome)].cursos.length > 0) {
            alunosDaEscola[indiceAluno(aluno.nome)].faltas++;
            console.log("Falta aplicada no aluno: " + aluno.nome);
        } else {
            console.log(aluno.nome + ": aluno não matriculado em nenhum curso");
        }
    } else {
        console.log(aluno.nome + ": aluno não cadastrado");
    }

}

/*chamada da funçao
aplicarFalta({
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
});
listarAlunos();
*/

//FUNÇÃO #6
function aplicarNota(aluno, nota) { //obj, number
    /*
     Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    */

    if ((indiceAluno(aluno.nome)) != false) {
        if (alunosDaEscola[indiceAluno(aluno.nome)].cursos.length > 0) {
            alunosDaEscola[indiceAluno(aluno.nome)].notas.push(nota);
            console.log("Nota adicionada ao aluno: " + aluno.nome);
        } else {
            console.log(aluno.nome + ": aluno não matriculado em nenhum curso");
        }
    } else {
        console.log(aluno.nome + ": aluno não cadastrado");
    }
}

/* chamada da função
aplicarNota({
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, 5);
listarAlunos();
*/

//FUNÇÃO #7
function aprovarAluno(aluno){//obj
    /* 
    Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    */
    if ((indiceAluno(aluno.nome)) != false) {
        if (alunosDaEscola[indiceAluno(aluno.nome)].cursos.length > 0) {
            let notas = aluno.notas;
            let acumulador = 0;
            //[10, 20, 5]
            let mediaNotas = notas.map( (nota) => {
                acumulador = acumulador + nota;
            }) 
            
            mediaNotas = (acumulador / (notas.length))

            if(aluno.faltas > 3 && mediaNotas < 7){//reprovou por nota E falta
                console.log("O aluno: " + aluno.nome + ", foi reprovado!");
                console.log("Faltas: " + aluno.faltas + ". Acima do limite de 3 faltas.");
                console.log("Nota: " + mediaNotas + ". Média de nota inferior a 7.");
            } else if(aluno.faltas > 3){//reprovou por falta
                console.log("O aluno: " + aluno.nome + ", foi reprovado!");
                console.log("Faltas: " + aluno.faltas + ". Acima do limite de 3 faltas.");
            } else if(mediaNotas < 7){//reprovou por nota
                console.log("O aluno: " + aluno.nome + ", foi reprovado!");
                console.log("Nota: " + mediaNotas + ". Média de nota inferior a 7.");
            } else {//passou
                console.log("O aluno: " + aluno.nome + ", foi aprovado!");
                console.log("Faltas: " + aluno.faltas + ". Abaixo do limite de 3 faltas.");
                console.log("Nota: " + mediaNotas + ". Média de nota apartir de 7.");
            }

        } else {
            console.log(aluno.nome + ": aluno não matriculado em nenhum curso");
        }
    } else {
        console.log(aluno.nome + ": aluno não cadastrado");
    }
}
/* Chamada da função
aprovarAluno({
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
});
*/