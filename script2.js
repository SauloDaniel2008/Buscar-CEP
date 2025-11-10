// Função principal

function modoStalkear(event){
    event.preventDefault() //impede o site de atualizar, ele atualiza somente as informações 

    let cep = document.getElementById("cep").value

    document.getElementById("resultado").innerHTML = "<p>Buscando <strong>CEP</strong> "

    /*Fetch faz um "pedido" na API do ViaCEP */


    fetch("https://viacep.com.br/ws/" + cep + "/json/")

    /* Quando o  */

    .then(resposta => resposta.json())

    .then(dados => {

        if(dados.error){
            document.getElementById("resultado").innerHTML = "<p> CEP NÃO ENCONTRADO</p>"
            return;
        }
        document.getElementById("resultado").innerHTML = ` ${dados.logradouro} <br> Bairro ${dados.bairro}<br> Estado ${dados.estado} <br> Estado ${dados.uf}`
        }
        

)



.catch (() => {

    document.getElementById("resultado").innerHTML = "<p>Erro ao buscar CEP.</p>";
})}
