import React, { useEffect,useState } from 'react';
import { useSelector} from 'react-redux'; 
import { useParams } from "react-router-dom";






const PreviousOrders = () => {
    const { telephone } = useParams();
    console.log(telephone);
    return (
        <div >
            <h1>Previous Orders</h1>

        </div>
    )
}

export default PreviousOrders;