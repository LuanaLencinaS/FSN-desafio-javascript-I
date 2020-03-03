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
    },{
        nomeDoCurso: "ios",   //ADICIONEI, LEMBRAR DE TIRAR
        dataMatricula: new Date
    }],
    faltas: 0
}];


// implementação
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

    if(alunosDaEscola.length != (alunosDaEscola.push(novoAluno))) {
        console.log("Aluno cadastrado");
    }
}

function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/
    alunosDaEscola.map( (aluno) => { 
        for (prop in aluno) {
            if(prop == "cursos") {
                let cursos = aluno.cursos; 
                if(cursos.length > 0){
                    console.log("cursos: ");
                    for (valor of cursos){
                        for (propCurso in valor){
                            if(propCurso == "dataMatricula") {
                                let data = valor[propCurso];

                                let dia = data.getDate();
                                let mes = (data.getMonth() + 1);//0 = janeiro
                                let ano = data.getFullYear();
                                let dataFormatada = [dia, mes, ano];
                                let stringDataFormatada = dataFormatada.join("/");

                                let semana = data.getDay() //0 = domingo

                                let hora = data.getHours(); //hora
                                let minutos = data.getMinutes();//minuto
                                let segundos = data.getSeconds(); //segundos
                                let horaFormatada = [hora, minutos, segundos];
                                let stringHoraFormatada = horaFormatada.join(":");
                                 
                                let arraySemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
                                
                                let dataMatriculaFormatada = stringDataFormatada + " " + stringHoraFormatada + " " + arraySemana[semana];
                                console.log("   " + propCurso + ": " + dataMatriculaFormatada);
                            
                            } else if(propCurso == "nomeDoCurso") {
                                console.log("   " + propCurso + ": " + valor[propCurso]);
                            }
                        }
                    }
                } else if(cursos.length == 0 || cursos.length < 0) {
                    console.log("cursos: Não matriculado em nenhum curso");
                }

            } else if(prop == "notas") {
                let notas = aluno.cursos; 
                if(notas.length > 0) {
                    console.log(prop + ": " + aluno[prop]);
                } else if(notas.length == 0 || notas.length < 0){
                    console.log("notas: Ainda sem notas");
                }
            
            } else {
                console.log(prop + ": " + aluno[prop]);
            }
        }
        console.log("\n");
     })
    
}

function buscarAluno(nomeAluno){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */

    for (aluno of alunosDaEscola) {
        let nome = aluno.nome;
        if(nome.indexOf(nomeAluno) != -1) {
            console.log("Aluno encontrado");
            return aluno;
        } else {
            console.log("Aluno não cadastrado");
        }
        
     }
}
listarAlunos(buscarAluno("Henrique"));
