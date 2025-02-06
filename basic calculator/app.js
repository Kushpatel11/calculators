let resultfield=document.getElementById("result");

let c = document.getElementById("c");
c.onclick=()=>{
    resultfield.innerHTML="";
};

for(let i=0; i<10; i++){
    let button = document.getElementById(i.toString());
    button.onclick=()=>{
        resultfield.innerHTML += button.innerHTML;
    };
}

for(let i=11; i<15; i++){
    let btn = document.getElementById(i.toString());
    btn.onclick=()=>{
        resultfield.innerHTML += btn.innerHTML;
    };
}

let dot = document.getElementById("dot");
dot.onclick=()=>{
    if(!resultfield.innerHTML.includes(".")){
        resultfield.innerHTML += "." ;
    }
}


let equl = document.getElementById("equl");
equl.onclick=()=>{
    try{
        resultfield.innerHTML = eval(resultfield.innerHTML)
    }
    catch{
        resultfield.innerHTML = "error";
        
    }
};

let pm = document.getElementById("10");
pm.onclick=()=>{
    let curr = resultfield.innerHTML;
    if (curr.startsWith("-")){
        resultfield.innerHTML = curr.slice(1);
    } else{
        resultfield.innerHTML = "-" + curr;
    }
};

let percentage = document.getElementById("per");
percentage.onclick=()=>{
    resultfield.innerHTML = (parseFloat(resultfield.innerHTML)/100).toString();
};

let deleted = document.getElementById("delete");
deleted.onclick=()=>{
    let curr = resultfield.innerHTML;
    resultfield.innerHTML = curr.slice(0,-1);
};


