'use strict'

let vehicle= {
    make: "Toyota",
    model: "Camry",
    color: "White",
    licensePlate: "ABC-0123",
    year: 2009,
    isEnable: false
};

function validarTaxi (vehicle) {
    let vidaUtil = 2023;
    vidaUtil = vidaUtil-vehicle.year;

    if(vidaUtil < 10){
        alert(true);
    }else{
        alert(false);
    }


}

validarTaxi (vehicle)