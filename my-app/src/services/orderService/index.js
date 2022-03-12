import React, {useState} from 'react';
export const saveOrder = async (order,phone) => {
    const ENDPOINT = 'http://localhost:3500/api/orders/' + phone; 
    await (fetch(ENDPOINT,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({order})
    }))
    console.log('Order saved!');
};

export const getOrders = async(phone) => {
    const ENDPOINT = 'http://localhost:3500/api/orders/' + phone; 
    const result =  await fetch(ENDPOINT);
    if(!result.ok) {return {};}
    console.log(`reslt: ${result}`);
    return result.json();
}