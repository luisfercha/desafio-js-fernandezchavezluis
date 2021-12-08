//Evento Formulario
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault(
        alert("¿Desea confirmar los datos ingresados?")
    );
    let formulario = e.target
    console.log(formulario.children[0].value); 
    console.log(formulario.children[1].value);
    console.log(formulario.children[2].value);
    console.log(formulario.children[3].value);  
}
