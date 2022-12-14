let aluno = {
    ConstruirAluno:        
        function Aluno(nomeAlun, FaltasDoAl, notasAl, _calcularMedia, _faltas) {
        this.nome = nomeAlun;
        this.quatidadeDeFaltas = FaltasDoAl;
        this.notas = notasAl;        
        this.calcularMedia = function(){
            let soma = 0;
            for (let i = 0; i < this.notas.length; i++){
                soma += this.notas[i]
            }
            const media = soma/this.notas.length;
            return media.toFixed(2);
        }   
        this.faltas = function(){
            let addUmaFalta = this.quatidadeDeFaltas + 1;
            return addUmaFalta;
        }
    }
}
module.exports = aluno;


let aluno1 = new aluno.ConstruirAluno('Bruno Souza',4,[3,5,8])
let aluno2 = new aluno.ConstruirAluno('Denilson sodré', 3,[9,10,8])
let aluno3 = new aluno.ConstruirAluno('Cesar diego', 2,[7,10,8])
let aluno4 = new aluno.ConstruirAluno('Karen dias', 1,[10,10,8])

aluno.listaDeAlunos = [aluno1,aluno2,aluno3,aluno4,];

