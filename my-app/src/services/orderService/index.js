import React, {useState} from 'react';
export const saveOrder = async (order,phone) => {
    const url = 'http://localhost:3500/api/orders/' + phone; 
    await (fetch(url,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({order})
    }))
    console.log('Order saved!');
    // console.log(order);
    // requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ order})
    // };
    // fetch('https://reqres.in/api/posts', requestOptions)
    //     .then(response => response.json())
    //     .then(data => setPostId(data.id));

};