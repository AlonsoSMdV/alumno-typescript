import { Alumno } from "./alumno";
import { Materia } from "./materia";
import * as readline from "readline-sync";

function crearAlumno(nombre: String, apellido1: string, apellido2: string) {
  
}

function crearMateria(nombre: string) {
  
}

function asignarMateriaAAlumno(idAlumno: number, idMateria: number) {
  
}

function asignarNotaAAlumno(idAlumno: number, idMateria: number, nota: number) {
  
}

function listarMateriasDeAlumno(idAlumno: number) {
  
}

function listarMaterias() {
  
}

function ListarAlumnosConNotas() {
  
}

function main(){
  console.log('Hola, bienvenido al gestor de alumnos\n');
  console.log('1. Crear alumno\n2. Crear materia\n3. Asignar materia a alumno\n4. Asignar nota a un alumno\n5. Listar alumnos\n6. Listar materias\n7. Listar alumnos por notas\n8. Salir');
  const opc: number = readline.questionInt('Que desea hacer? ');
  console.log();

  if (opc != 8) {
    main();
  }else{
    console.log('Gracias por usar el gestor de alumnos');
  }
}

main()

