class Alumno {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = parseInt(Number(edad))
    }
    mostrarDatos() {
        let padre = document.getElementById("mostrar");
        padre.innerHTML = `<p>"El alumno se llama ${this.nombre} y tiene ${this.edad} años.</p>`;
    }
    comparacion() {
        if (this.edad >= 18) {
            let padre2 = document.getElementById("indicar");
            padre2.innerHTML = `<p>Es Mayor de edad.</p>`;
        } else {
            let padre2 = document.getElementById("indicar");
            padre2.innerHTML = `<p>Es menor de edad.</p>`;
        }
    }
}

let nombreAlumno = "";
let edad = "";
let nombreA = document.getElementById("nombre");
nombreA.addEventListener("input", () => {
    nombreAlumno = nombreA.value;
});
let ed = document.getElementById("edad");
ed.addEventListener("input", () => {
    edad = ed.value;
});


let estadoDatos = document.getElementById("pedirDatos");
function corroborarDatos() {
    if (nombreAlumno === "") {
        estadoDatos.innerHTML = `Introduzca el nombre del alumno por favor.`;
    } else if (edad === "") {
        estadoDatos.innerHTML = `Introduzca la edad del alumno por favor.`;
    } else {
        cargarAlumno()
    }
}

console.log(nombreAlumno)
console.log(edad)
function cargarAlumno() {
    const alumno = new Alumno(nombreAlumno, edad);
    console.log(alumno)
    alumno.mostrarDatos()
    alumno.comparacion()
}












