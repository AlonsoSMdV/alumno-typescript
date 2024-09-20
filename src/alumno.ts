import { materia } from "./materia";
export class alumno{
    idAlumno: number;
    nombre: string;
    apellido1: string;
    apellido2: string;

    constructor(nombre: string, apellido1: string, apellido2: string,){
        this.idAlumno =+ 1;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }

    
    public get getNombre() : string {
        return this.nombre;
    }

    public get getApe1() : string {
        return this.apellido1;
    }

    public get getApe2() : string {
        return this.apellido2;
    }
    
    
    
}