
var type = prompt(' Ingrese el tipo de trabajador (F/T): ')


if( type == 'F' || type == 'f' ){
    var name = prompt(' Ingrese su nombre: ')
    var hours = prompt(' Ingrese el numero de horas trabajadas: ')
    var salario = prompt(' Ingrese su salario basico por hora: ')
    var dedu = prompt(' Ingrese el total de deduciones: ')
    var boni = prompt(' Ingrese el total de bonificaciones: ')

    alert('Hola -- '+ name + ' -- Tu numero de horas trabajadas es: ' + hours + ' -- Tu salario basico por hora es: ' + salario + ' -- Tus tienes deduciones son: ' + dedu + ' -- Tus  bonificaciones son:' + boni)
} else  {
    var name = prompt(' Ingrese su nombre: ')
    var hours = prompt(' Ingrese el numero de horas trabajadas: ')
    var salario = 6000
    var dedu = 0
    var boni = 0

    alert(' Hola -- '  +  name  + ' -- Tu numero de horas trabajadas es: '  +  hours  + ' -- Tu salario basico por hora es:  ' + salario + ' -- No tienes deducione: ' + dedu  + ' -- No tiene bonificaciones:' + boni)

   
}
    
