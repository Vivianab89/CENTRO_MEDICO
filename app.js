const nombres = document.getElementById("nombre");
const apellidos = document.getElementById("apellido");
const cedula = document.getElementById("cedula");
const telefono = document.getElementById("telefono");
const especialidad = document.getElementById("especialidad");
//Campos propios de los medicos
const consultorio = document.getElementById("consultorio");
const correo = document.getElementById("correo");
//Campos propios de los pacientes
const edad = document.getElementById("edad");
//Llamado de los formularios
const formularioMedicos = document.getElementById("form-medicos");
const formularioPacientes = document.getElementById("form-pacientes");

class usuario{
    constructor(nombre, apellido, cedula, telefono, especialidad)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.cedula=cedula;
        this.telefono=telefono;
        this.especialidad=especialidad;
    }
}

const mostrarMedicos = function () {
    let medicos = [];
    let cuerpoTabla = document.getElementById("tabla-medicos");
    let localMedicos = localStorage.getItem("medicos");
    if (localMedicos) 
    {
        medicos = JSON.parse(localMedicos);
    }
    medicos.forEach((medico) => {
        let fila = document.createElement("tr");
      //Para crear celda DOM tiene un metodo que es insertCell()
        let celdaNombres = fila.insertCell();
        let celdaApellidos = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaConsultorio = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        let celdaCorreo = fila.insertCell();
        let celdaEspecialidad = fila.insertCell();
        let celdaPaciente = fila.insertCell();

        celdaNombres.textContent = medico.nombre;
        celdaApellidos.textContent = medico.apellido;
        celdaCedula.textContent = medico.cedula;
        celdaConsultorio.textContent = medico.consultorio;
        celdaTelefono.textContent = medico.telefono;
        celdaCorreo.textContent = medico.correo;
        celdaEspecialidad.textContent = medico.especialidad;
        celdaPaciente.textContent = "Sin asignar";
    
        cuerpoTabla.appendChild(fila);
    });
};