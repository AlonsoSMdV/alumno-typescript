export class Materia {
    private static contadorId: number = 1;
    public idMateria: number;
    public nombre: string;

    constructor(nombre: string) {
        this.idMateria = Materia.contadorId++;
        this.nombre = nombre;
    }
}