"use strict";


// 1. isHometown

// Define your function here

const isHometown = town => town === 'San Francisco';


// 2. getFullName

// Define your function here

const getFullName =(firstName,lastName) =>`${firstName} ${lastName}`;


// 3. calculateTotal

// Define your function here

const calculateTotal =(basePrice,state,tax=0.05) =>{
    const subtotal =  basePrice * (1 + tax);
    let fee=0; // it allows u change that's the reason we have let
    if (state ==='CA'){
        fee = 0.03 * subtotal;  
    }else if (state ==='MA'){
        if (basePrice <= 100){
            fee = 1;
        }else{
            fee = 3;
        }
    }
    return subtotal + fee; 
}