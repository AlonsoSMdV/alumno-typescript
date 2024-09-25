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
  console.log(`Alumno ${nombre} ${apellido1} ${apellido2} creado con el ID ${alumnoNuevo.idAlumno}`);
}

function crearMateria(nombre: string) {
  const materiaNueva = new Materia(nombre);
  materias[materiaNueva.idMateria] = materiaNueva;
  materiasCont++;
  console.log(`Materia ${nombre} creada con el ID ${materiaNueva.idMateria}`);
}

function asignarMateriaAAlumno(idAlumno: number, idMateria: number) {
  const alumno = alumnos[idAlumno];
  const materia = materias[idMateria];

  if (alumno && materia) {
    alumno.asignarMateria(materia);
    console.log(`Materia ${materia.nombre} asignada al alumno ${alumno.nombre}`)
  }else{
    console.log('Alumno o materia no encontrados');
  }
}

function asignarNotaAAlumno(idAlumno: number, idMateria: number, nota: number) {
  const alumno = alumnos[idAlumno];
  const materia = materias[idMateria];
  if(alumno){
    alumno.asignarNota(idMateria, nota);
    console.log(`Nota ${nota} asignada a la materia ${materia.nombre} para el alumno ${alumno.nombre}`)
  }else{
    console.log('Alumno no encontrado');
  }
}

function listarAlumnos() {
  let hayAlumnos = false;
  for (const id in alumnos) {
      if (alumnos.hasOwnProperty(id)) {
          if (!hayAlumnos) {
              console.log('Lista de alumnos registrados:');
              hayAlumnos = true;
          }
          const alumno = alumnos[id];
          console.log(`- ${alumno.nombre} ${alumno.apellido1} ${alumno.apellido2} (ID: ${alumno.idAlumno})`);
      }
  }
  if (!hayAlumnos) {
      console.log('No hay alumnos registrados.');
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
  let hayMaterias = false;
  for (const id in materias) {
      if (materias.hasOwnProperty(id)) {
          if (!hayMaterias) {
              console.log('Materias disponibles:');
              hayMaterias = true;
          }
          const materia = materias[id];
          console.log(`- ${materia.nombre} (ID: ${materia.idMateria})`);
      }
  }
  if (!hayMaterias) {
      console.log('No hay materias creadas.');
  }
}

function listarAlumnosConNotas() {
  let hayAlumnos = false;
  for (const id in alumnos) {
      if (alumnos.hasOwnProperty(id)) {
          if (!hayAlumnos) {
              console.log('Lista de alumnos con sus notas:');
              hayAlumnos = true;
          }
          const alumno = alumnos[id];
          console.log(`Alumno: ${alumno.nombre} ${alumno.apellido1} ${alumno.apellido2}`);
          alumno.listarMaterias();
      }
  }
  if (!hayAlumnos) {
      console.log('No hay alumnos registrados.');
  }
}

console.log('Hola, bienvenido al gestor de alumnos\n');
function main(){
  console.log('1. Crear alumno\n2. Crear materia\n3. Asignar materia a alumno\n4. Asignar nota a un alumno\n5. Listar alumnos\n6. Listar materias del alumno\n7. Listar materias\n8. Listar alumnos por notas\n9. Salir');
  const opc: number = readline.questionInt('Que desea hacer? ');
  console.log();
  var nombre: string;
  var apellido1: string;
  var apellido2: string;
  var idAlumno: string;
  var idMateria: string;
  switch (opc) {
    case 1:
      nombre = readline.question('Nombre: ');
      apellido1 = readline.question('Primer apellido: ');
      apellido2 = readline.question('Segundo apellido: ');
      crearAlumno(nombre, apellido1, apellido2);
      console.log();
      break;

    case 2:
      nombre = readline.question('Nombre de materia: ');
      crearMateria(nombre);
      console.log();
      break;

    case 3:
      idAlumno = readline.question('ID del alumno: ');
      idMateria = readline.question('ID de la materia: ');
      asignarMateriaAAlumno(Number(idAlumno), Number(idMateria));
      console.log();
      break;

    case 4:
      idAlumno = readline.question('ID del alumno: ');
      idMateria = readline.question('ID de la materia: ');
      var nota = readline.question('Nota: ');
      asignarNotaAAlumno(Number(idAlumno), Number(idMateria), Number(nota));
      console.log();
      break;

    case 5:
      listarAlumnos();
      console.log();
      break;

    case 6:
      idAlumno = readline.question('ID del alumno: ');
      listarMateriasDeAlumno(Number(idAlumno));
      console.log();
      break;

    case 7:
      listarMaterias();
      console.log();
      break;

    case 8:
      listarAlumnosConNotas();
      console.log();
      break;
  
    default:
      break;
  }
  if (opc != 9) {
    main();
  }else{
    console.log('Gracias por usar el gestor de alumnos');
  }
}

main()

