let a=prompt("Enter number a: ");
let b=prompt("Enter number b: ");

let num=Number(a);
let num1=Number(b);

let c=prompt("Select the operation(+,-,*,/,%)");
    if (c=="+"){
        
        
        let x=num+num1;

        alert(x);
    }
    else if(c=="-"){
        let r=num-num1;
        alert(r);
    }
    else if(c=="*"){
        let z=num*num1;
        alert(z);
    }
    else if(c=="/"){
        let v=num/num1;
        alert(v);
    }
    else if(c=="%"){
        let m=num%num1;
        alert(m);
    }
    else{
        alert("There are no such operations!");
    }