import { Alumno } from "./alumno";
import { Materia } from "./materia";
import * as readline from "readline-sync";

const alumnos: {[id:number]:Alumno} = {};
const materias: {[id:number]:Materia} = {};
let alumnosCont = 0;
let materiasCont = 0;

function crearAlumno(nombre: string, apellido1: string, apellido2: string) {
  const alumnoNuevo = new Alumno(nombre, apellido1, apellido2);
  alumnos[alumnoNuevo.idAlumno] = alumnoNuevo;
  alumnosCont++;
  console.log('Alumno ${nombre} ${apellido1} ${apellido2} creado con el ID ${alumnoNuevo.idAlumno}');
}

function crearMateria(nombre: string) {
  const materiaNueva = new Materia(nombre);
  materias[materiaNueva.idMateria] = materiaNueva;
  materiasCont++;
  console.log('Materia ${nombre} creada con el ID ${materiaNueva.idMateria}');
}

function asignarMateriaAAlumno(idAlumno: number, idMateria: number) {
  const alumno = alumnos[idAlumno];
  const materia = materias[idMateria];

  if (alumno && materia) {
    alumno.asignarMateria(materia);
    console.log('Materia ${materia.nombre} asignada al alumno ${alumno.nombre}')
  }else{
    console.log('Alumno o materia no encontrados');
  }
}

function asignarNotaAAlumno(idAlumno: number, idMateria: number, nota: number) {
  const alumno = alumnos[idAlumno];
  if(alumno){
    alumno.asignarNota(idMateria, nota);
    console.log('Nota ${nota} asignada a la materia ${materia.nombre} para el alumno ${alumno.nombre}')
  }else{
    console.log('Alumno no encontrado');
  }
}

function listarMateriasDeAlumno(idAlumno: number) {
  const alumno = alumnos[idAlumno];

  if (alumno) {
    alumno.listarMaterias();
  } else {
    console.log('Alumno no encontrado');
  }
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

