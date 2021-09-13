function mostrarContainer1(){
    if (document.getElementById('c-radio1').checked){
    document.getElementById('educacaoMelhor').style.display = "block";
    document.getElementById('gestaoMelhor').style.display = "none";
    document.getElementById('educacaoQualidade').style.display = "none";
    }
}

function mostrarContainer2(){
    
    document.getElementById('c-radio2');
    document.getElementById('gestaoMelhor').style.display = "block";
    document.getElementById('educacaoMelhor').style.display = "none";
    document.getElementById('educacaoQualidade').style.display = "none";
}


function mostrarContainer3(){
    document.getElementById('c-radio3');
    document.getElementById('educacaoQualidade').style.display = "block";
    document.getElementById('gestaoMelhor').style.display = "none";
    document.getElementById('educacaoMelhor').style.display = "none";
}

/*
if (document.getElementById('c-radio1')){
    document.getElementById('c-radio1');
    document.getElementById('educacaoMelhor').style.display = "block";
} else if(document.getElementById('c-radio2')){
    document.getElementById('c-radio2');
    document.getElementById('gestaoMelhor').style.display = "block";
} else {
    document.getElementById('c-radio3');
    document.getElementById('gestaoMelhor').style.display = "block";
}*/