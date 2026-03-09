// function reservacion(){
//      let bolsa = document.querySelectorAll('.form-control');
//      let nombrecompleto = bolsa[0].value;
//      for (let i = 0; i < bolsa.length; i++) {
//         const elemento = bolsa[i].Value;  // El array llama bolsa
//         if(!nombre || !correo || !fecha || !hora || !numero) {
//             alert('🎈Error falta datos');
//             return; //Encuentra un campo vacio de una se sale
//         }
//         else{
//             alert(nombrecompleto + " 🖊️Su mensaje ha sido enviado. Gracias por contactarnos!");
//             return;
//         }
//     }

// }

function reservacion() {

    let bolsa = document.querySelectorAll('.form-control');
    let nombrecompleto = bolsa[0].value;

    for (let i = 0; i < bolsa.length; i++) {

        if (bolsa[i].value == "") {
             Swal.fire({
                title: "🎈 Error",
                text: "Faltan datos por completar",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            return; // Si encuentra uno vacío se sale
        }
    }
    Swal.fire({
            title: "¡Mensaje enviado!",
            text: nombrecompleto + " 🖊️ Su mensaje ha sido enviado. Gracias por contactarnos!",
            icon: "success",
            confirmButtonText: "Aceptar"
        });
    
}

