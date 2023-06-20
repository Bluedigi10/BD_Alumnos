class Alumno{
    Nombre= '';
    Apellido= '';
    Edad= 0;
    Materias= [];
    Calificaciones= [];
    
    constructor (nombre,apellido,edad){
        this.Nombre=nombre;
        this.Apellido=apellido;
        this.Edad=edad;
    };
    AsignarMateria (Materia){
        this.Materias.push(Materia);
    }
    AsignarCalif (Materia,calificacion){
        for(let i=0;i<this.Materias.length;i++){
            if(this.Materias[i]==Materia){
                this.Calificaciones[i]=calificacion;
                return;
            }
        }
    }
    MostrarAlumno (alumno){
        console.log(alumno);
    }
}
let grupo=[];
grupo[0]=new Alumno("Emmanuel","Matinez",24);
grupo[0].AsignarMateria("Biologia");
grupo[0].AsignarMateria("Matematicas");
grupo[0].AsignarMateria("Español");
grupo[0].AsignarCalif("Español",8);
grupo[0].AsignarCalif("Matematicas",7);
grupo[0].AsignarCalif("Biologia",1);

grupo[0].MostrarAlumno(grupo[0]);

class Grupos{
    Nombre = "";
    Alumnos = [];
    constructor(nombre,alumnos){
        this.Nombre=nombre;
        this.Alumnos=alumnos;
    }
    BuscarNombre(nombre){
        const size=this.Alumnos.length;
        for(let i=0;i<size;i++){
            if(this.Alumnos[i].Nombre===nombre){
                console.log(this.Alumnos[i].Nombre);
                return i;
            }
        }
        return -1;
    }
}

function guardar(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let materias = document.getElementById("materias").value;
    let calificaciones = document.getElementById("calificaciones").value;

    console.log("Guardando alumno")
    console.log(nombre)
    console.log(apellidos)
    console.log(edad)
    console.log(materias)
    console.log(calificaciones)
}
