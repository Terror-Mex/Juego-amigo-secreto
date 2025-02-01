// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let almacenarAmigos = [];

function agregarAmigo() {
  let amigos =  document.getElementById("amigo").value;
  almacenarAmigos.push(amigos);
    console.log(almacenarAmigos);
    document.getElementById("amigo").value = "";
    if(amigos == ""){
        alert ("Por favor inserte un nombre.");

    }
    agregarALista();
}
function agregarALista(){
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML ="";
    for (let i =0; i< almacenarAmigos.length; i++){
        let list = document.createElement("li");
        list.innerHTML= almacenarAmigos[i];
        lista.appendChild(list);

    }

}