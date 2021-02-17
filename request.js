 
let dados
let url = 'https://viacep.com.br/ws/'
let rua = document.getElementById("rua") ;
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");
let ibge = document.getElementById("ibge");
 
let indice 
function onlyNumbers(){
    const re = /[^0-9]/;
    let cep = document.getElementById("cep");
    let campo = cep ;
    indice = campo.value.length
    if (re.test(campo.value)) {
        campo.value = campo.value.replace(campo.value[indice - 1],'') 
        
    }
 
    if (campo.value.length == 0){
       
        limpaForm()
    }
        if (campo.value.length == 8){
        return
    
    }   
  
    
   
  
    
}

 
indice = 0
 

function preenche( ) {
    url = "https://viacep.com.br/ws/"
    url = `${url}${cep.value}/json`; 
    console.log(url)
    fetch(url)
        .then(function(response){
            response.json().then(function(data){
        
        dados = data
        console.log(dados)
        if (!("erro" in dados)){
            document.getElementById("rua").value = dados.logradouro;
            document.getElementById("bairro").value = dados.bairro;
            document.getElementById("cidade").value = dados.localidade;
            document.getElementById("estado").value = dados.uf;
            document.getElementById("ibge").value = dados.ibge;
            document.getElementById("ddd").value = dados.ddd;
            
        }
        else {
            alert(` O cep:  ${cep.value}  não foi encontrado`)
            dados['erro'] = false
            console.log(dados)
            limpaForm ()
        }
      

     })


    })      
 
}

    
        
    

function limpaForm (){
    let x = document.getElementsByTagName('input');
        
    let l = x.length
    for (i = 0; i < l; i++) {
        x[i].value = "";
        console.log(x[i].value)
    
      }  
      dados['erro'] = false
}