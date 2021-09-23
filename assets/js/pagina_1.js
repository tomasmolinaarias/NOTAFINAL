//pedir  el nombre y la carrera
var nombre = prompt ("Coloca tu NOMBRE!")
var carrera = prompt ("¿En que carrera te encuentras?")

//nota de aprobacion
var nota_APR = prompt("¿cual es la nota de aprobacion", "4.0")

//pedir los modulos
var modulo1 = prompt ("escribe el primer modulo")
var modulo2 = prompt ("escribe el segundo modulo")
var modulo3 = prompt("escribe el tercer modulo")

//pedir la nota del primer modulo
var nM1_1 = prompt ("Coloca la primera nota del MODULO 1","1.0")
var nM1_2 = prompt ("Coloca la segunda nota del MODULO 1","1.0")
var nM1_3 = prompt ("Coloca la tercera nota del MODULO 1","1.0")

//pedir la nota del segundo modulo
var nM2_1 = prompt ("coloca la primera nota del MODULO 2","1.0")
var nM2_2 = prompt ("coloca la segunda nota del MODULO 2","1.0")
var nM2_3 = prompt ("coloca la tercera nota del MODULO 2","1.0")

//pedir la nota del tercer modulo
var nM3_1 = prompt ("coloca la primera nota del MODULO 3","1.0")
var nM3_2 = prompt ("coloca la segunda nota del MODULO 3","1.0")
//var nM3_3 = prompt ("coloca la tercera nota del MODULO 3","1.0")

//pegamos  los h5 y le agregamos el nombre y la carrera
document.write(`<div class="container"> <h5>Nombre:   ${nombre} </h5> </div>`)
document.write(`<div class="container"> <h5>Carrera:   ${carrera} </h5> </div>`)

//transformando a entero
//modulo1
nM1_1 = parseInt(nM1_1)
nM1_2 = parseInt(nM1_2)
nM1_3 = parseInt(nM1_3)
//modulo 2
nM2_1 = parseInt(nM2_1)
nM2_2 = parseInt(nM2_2)
nM2_3 = parseInt(nM2_3)
//modulo 3
nM3_1 = parseInt(nM3_1) 
nM3_2 = parseInt(nM3_2)
//nM3_3 = parseInt(nM3_3)

//promedio
//modulo1
var suma_m1 = nM1_1 + nM1_2 + nM1_3
var divicion_m1 = suma_m1 / 3 
var promedio_modulo1 = divicion_m1
//modulo2
var suma_m2 = nM2_1 + nM2_2 + nM2_3
var divicion_m2 = suma_m2 / 3
var promedio_modulo2 = divicion_m2
//modulo3
var suma_m3 = nM3_1 + nM3_2 
var divicion_m3 = suma_m2 / 3
var promedio_modulo3 = divicion_m3

//restante
var resta = nota_APR - nM3_1 - nM3_2  
var restante = resta



//tabla
document.write(`
<div class="container">
        
            <table class="table">
                <thead>
                  <tr class="table-dark" >
                    <th scope="col">cursos</th>
                    <th scope="col">nota 1</th>
                    <th scope="col">nota 2</th>
                    <th scope="col">nota 3</th>
                    <th scope="col">promedio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">${modulo1}</th>
                    <td>${nM1_1}</td>
                    <td>${nM1_2}</td>
                    <td>${nM1_3}</td>
                    <td>${promedio_modulo1.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th scope="row">${modulo2}</th>
                    <td>${nM2_1}</td>
                    <td>${nM2_2}</td>
                    <td>${nM2_3}</td>
                    <td>${promedio_modulo2.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <th scope="row">${modulo3}</th>
                    <td>${nM3_1}</td>
                    <td>${nM3_2}</td>
                    <td>-</td>
                    <td>${promedio_modulo3.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
`)
document.write(`
<div class="container">
<p> para aprobar el ramo  ${modulo3} con nota ${nota_APR} necesitas obtener un ${restante.toFixed(2)} en la 3 nota </p>
</div>

`) 


