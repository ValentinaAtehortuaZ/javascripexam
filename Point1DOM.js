/*const button = document.querySelector('#button')
if(button){
    document.addEventListener('click' , function(event) {
        const plate = document.querySelector('#plate')
        const passengers = document.querySelector('#passengers')
        const rute = document.querySelector('#rute')
       var total
    

        if( plate && passengers && rute && total){
            let plateValue = plate.value
            let passengersValue = Number(passengers.value)
            let ruteValue = rute.value
           
             var msg = ""
             

            if(plateValue == '' || passengersValue == '' || ruteValue == ''){
                msg = 'Please fill fields'
            }else{
                let total = calculate(passengers.value,rute.value )
                msg = 'Hi ' + ' el dinero que recolectó es:  ' + total
                cleanFields()  
            } 
            ex1result.textContent = msg
        }else{
            alert('Error')
        }
    })
}

function calculate(total, rute, passengers){
    if( rute == 'A' || rute == 'a' ){
        total = passengers * 1200
    } else  {
        total = passengers * 1000
    }
  
}

function cleanFields(){
    plateValue .value = ""
    passengersValue = ""
    ruteValue = ""
}*/