let alunos = require('./aluno')


let curso = {
    nomeDoCurso: 'Programaçao imperativa',
    notaDeAprovacao: 7,
    faltasMaximas: 5,
    listaEstudantes: alunos.listaDeAlunos,
    addAluno: function(){
        let novoAluno = new alunos.ConstruirAluno('Gadiel', 4,[7,9,10])
            this.listaEstudantes.push(novoAluno)
    }, 

    aprovacaoAluno: function(aluno){

        if(alunos.listaDeAlunos[aluno].calcularMedia() >= curso.notaDeAprovacao && alunos.listaDeAlunos[aluno].quatidadeDeFaltas < curso.faltasMaximas){
            
            console.log('aprovação: ' + true);

        } else if (alunos.listaDeAlunos[aluno].calcularMedia() >= (curso.notaDeAprovacao * 1.1) && alunos.listaDeAlunos[aluno].quatidadeDeFaltas == curso.faltasMaximas){
            
            console.log('aprovação: ' + true);

        } else { 
            
            console.log('aprovação: ' + false);
            
        }
    },

    aprovacaoFinal: function(){

        for (let i = 0; i < alunos.listaDeAlunos.length ; i++){

            if(alunos.listaDeAlunos[i].calcularMedia() >= curso.notaDeAprovacao && alunos.listaDeAlunos[i].quatidadeDeFaltas < curso.faltasMaximas){
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' APROVADO  ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + true);

            } else if (alunos.listaDeAlunos[i].calcularMedia() >= (curso.notaDeAprovacao * 1.1) && alunos.listaDeAlunos[i].quatidadeDeFaltas == curso.faltasMaximas){
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' APROVADO ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + true);

            } else { 
                
                console.log('Aluno ' + alunos.listaDeAlunos[i].nome + ' NÃO APROVADO ' + alunos.listaDeAlunos[i].calcularMedia() + ' com ' + alunos.listaDeAlunos[i].quatidadeDeFaltas + ' faltas: ' + false);

            }
        }
    }
}

