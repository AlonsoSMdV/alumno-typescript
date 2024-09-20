import  { alumno }  from "./alumno";
export class materia{
    nombre: string;
    idAlumnoMatriculado?: number;

    constructor(nombre: string, alumno?: alumno){
        this.nombre = nombre;
        this.idAlumnoMatriculado = alumno?.idAlumno
    }

    public get getNombre() : string {
        return this.nombre;
    }
    
    
}