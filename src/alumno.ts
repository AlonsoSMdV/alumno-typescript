import { Materia } from './materia';

export class Alumno {
    private static contadorId: number = 1;
    public idAlumno: number;
    public nombre: string;
    public apellido1: string;
    public apellido2: string;
    public materias: { materia: Materia; nota: number | null }[] = [];

    constructor(nombre: string, apellido1: string, apellido2: string) {
        this.idAlumno = Alumno.contadorId++;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }

    // Asignar una materia al alumno
    public asignarMateria(materia: Materia) {
        this.materias[this.materias.length] = { materia, nota: null }; // Usar índice para añadir
    }

    // Asignar una nota a una materia específica del alumno
    public asignarNota(materiaId: number, nota: number) {
        const materiaAsignada = this.materias[materiaId - 1]; // Acceso por índice
        if (materiaAsignada) {
            materiaAsignada.nota = nota;
        }
    }

    // Listar todas las materias del alumno
    public listarMaterias(): void {
        if (this.materias.length === 0) {
            console.log('${this.nombre} no tiene materias asignadas.');
        } else {
            console.log('Materias de ${this.nombre}:');
            for(const m of this.materias) {
                const notaTexto = m.nota !== null ? 'Nota: ${m.nota}' : 'Sin nota';
                console.log('- ${m.materia.nombre} (${notaTexto})');
            };
        }
    }
}