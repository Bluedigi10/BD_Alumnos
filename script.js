// var Alumnos = [
//     {"Nombre":"Emmanuel","Apellidos":"Martinez","Edad":24,"Materias Inscritas":["Español","Matematicas","Inglés"],"Calificaciones":[10,8,9]},
//     {"Nombre":"Emmanuel","Apellidos":"Ventura","Edad":24,"Materias Inscritas":["Español","Matematicas","Inglés"],"Calificaciones":[9,10,8]},
//     {"Nombre":"Carlos","Apellidos":"Casillas","Edad":24,"Materias Inscritas":["Español","Matematicas","Inglés"],"Calificaciones":[10,10,10]},
// ];
// console.log(Alumnos.length);
// AltaAlumnos();
// InscribirClase();
// function AltaAlumnos(){
//     let nombre="Mario";
//     let apellido="Campos";
//     let edad=25;
//     var nuevo={
//         "Nombre":nombre,"Apellidos":apellido,"Edad":edad,"Materias Inscritas":[],"Calificaciones":[]
//     };
//     Alumnos.push(nuevo);
//     console.log(Alumnos);
// }
// function InscribirClase(){
//     let nombre = "Mario";
//     let apellido = "Campos";
//     let materias =["Ingles","Español","Biologia"];
//     for(let i=0;i<Alumnos.length;i++){
//         if(Alumnos[i]['Nombre']==nombre && Alumnos[i]['Apellidos']==apellido){
//             Alumnos[i]['Materias Inscritas'].push(materias);
//             console.log(Alumnos);
//         }
//     }
// }

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
