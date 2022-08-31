let gabarito = ["a", "a", "b", "b"]
let prova = ["a", "c", "b", "d"]

function checkExam(array1, array2){
    let nota = 0
    for(let i=0;i<array1.length;i++){
        if(array1[i]==array2[i]){
            nota+=4
        }else if(array2[i]==""){
            nota+=0
        }else{
            nota-=1
        }
    }
    if(nota>0){
        return nota
    }else{
        return 0
    }
}

console.log(checkExam(gabarito,prova))