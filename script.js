//Inicio de prototipo
const Alumno={
    Nombre: '',
    Apellido: '',
    Edad: 0,
    Materias: [],
    Calificaciones: [],
    //metodo que crea un nuevo objeto 
    NuevoAlumno: function (nombre,apellido,edad,materias=[],calif=[]){
        this.Nombre=nombre;
        this.Apellido=apellido;
        this.Edad=edad;
        this.Materias=materias;
        this.Calificaciones=calif;
    },
    //metodo que inscribe al alumno a materias
    AsignarMateria: function (Materia){
        this.Materias.push(Materia);
    },
    //metodo que le asigna calificaion
    AsignarCalif: function (Materia,calificacion){
        for(let i=0;i<this.Materias.length;i++){
            if(this.Materias[i]==Materia){
                this.Calificaciones[i]=calificacion;
                return;
            }
        }
    },
    //metodo que muestra el objeto
    MostrarAlumno: function (alumno){
        console.log(alumno);
    }
};
let Grupos=[
    {'Nombre':"",Alumnos: []}
];
console.log(Grupos);
var grupo=[];

function guardarAlumno(){
    if(JSON.parse(localStorage.getItem("grupo"))!==null){
        grupo = JSON.parse(localStorage.getItem("grupo"));
    }else{
        localStorage.setItem("grupo",JSON.stringify(grupo));
    }
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellidos').value;
    let edad = document.getElementById('edad').value;
    grupo.push(Object.create(Alumno));
    grupo[grupo.length-1].NuevoAlumno(nombre,apellido,edad);
    localStorage.setItem("grupo",JSON.stringify(grupo));
    alert("Agregado con exito!");
    console.log(JSON.stringify(grupo));
    console.log(grupo);
};
function agregar(){
    let opcionAlumno = document.getElementById("OpcionAlumno");

    let materia=document.getElementById("OpcionMateria");
    materia.style.display="none";

    if(opcionAlumno.style.display=="flex"){
        opcionAlumno.style.display="none"
    }else{
        opcionAlumno.style.display="flex";
    };
}
function agregarmateria(){
    let opcionMateria = document.getElementById("OpcionMateria");
    
    let alumno=document.getElementById("OpcionAlumno");
    alumno.style.display="none";
    
    if(opcionMateria.style.display=="flex"){
        opcionMateria.style.display="none";
    }else{
        opcionMateria.style.display="flex";
    };
}

function salir(){
    location.href="index.html";
}