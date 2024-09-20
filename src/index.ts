import { alumno } from "./alumno";
import { materia } from "./materia";
import * as readline from "readline-sync";

console.log('Hola, bienvenido al gestor de alumnos\n');
console.log('1. Crear alumno\n2. Crear materia\n3. Matricular a alumno en materia\n4. Asignar nota a un alumno\n5. Listar por alumnos\n6. Listar por materias\n7. Listar por notas');
const opc: number = readline.questionInt('Que desea hacer? ');
