//condiciones compuestas

//Ejercicio 1
let usuario = prompt ("ingresa el usuario")
let contraseña = prompt ("ingresa la contraseña")

if ((usuario == "juanGarcia23") && (contraseña == "cJZoht3!")) {
    alert("bienvenido" + usuario)
} else {
    alert("No tienes acceso")
}


//Ejercicio 2
let notaExamen = Number (prompt("ingresa notaExamen")) 
let notaTrabajosPracticos = Number (prompt("ingresa notaTrabajosPracticos"))
let asistencia = Number (prompt("Ingresa tu asistencia"))

if ((notaExamen >=8) && (notaTrabajosPracticos >=6) && (asistencia == true)){
    alert ("Estas aprobado")
} else {
    alert("estasDesaprobado")
}


//Ejercicio 3
let dia = prompt("Ingrese que día es")
let residuos = prompt("Que tipo de residuos tiene")

if (((dia == "Lunes")||(dia == "Miércoles")||(dia == "Viernes")) && (residuos == "humedos")){ 
    alert ("Saca los residuos humedos") 
} else { 
    alert ("No podés sacar residuos") 
} 
    
if (((dia == "Martes")||(dia == "Jueves")||(dia = "Domingo")) && (residuos == "secos")) { 
    alert("Saca los residuos secos")
} else {
     alert("No sacar residuos") 
} 
     
if (dia = "Sábado"){ 
    alert("El basurero no pasa") 
}
