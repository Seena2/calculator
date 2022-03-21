//ADD
function add(a,b){
    return a+b;
}
//SUBTRUCT
function subtract(a,b){
    return a-b;
}
//MULTIPLY
function multiply(a,b){
    return a*b;
}
//DIVIDE
function divide(a,b){
    return a/b;
}
//operate
function operate(a,b,c){
    const first=a;
    const op=b;
    const second=c;
 
    if(op===1){
        return add(first,second);
    }else if(op===2){
        return subtract(first,second);
    }else if(op===3){
        return multiply(first,second);
    }else if(op===4){
        return divide(first,second);
    }else{
        console.log("error: wrong operator or operand used");
    }
}
 
