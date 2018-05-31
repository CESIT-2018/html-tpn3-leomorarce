function enviarDatos() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let sexo = document.getElementById("sexo").value;

    let request = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        sexo: sexo
    };

    if (nombre == null || nombre.length == 0) {
        alert("ERROR: El campo nombre no debe ir vacío.");
    } else {
        if (apellido == null || apellido.length == 0) {
            alert("ERROR: El campo apellido no debe ir vacío.");
        } else {
            if (!(/\S+@\S+\.\S+/.test(email))) {
                alert("ERROR: Debe escribir un correo válido.");
            } else {
                document.getElementById("resultado").innerHTML = JSON.stringify(request);

                setTimeout(function () {
                    document.getElementById("resultado").innerHTML = JSON.stringify(request) +
                        "... Enviada exitosamente";
                }, 3000);
            }
        }
    }
}