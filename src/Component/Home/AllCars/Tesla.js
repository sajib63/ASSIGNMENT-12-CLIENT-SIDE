import React, { useEffect, useState } from 'react';

const Tesla = () => {
    const [teslaCars, setTeslaCars]=useState('');
    useEffect(()=>{
        fetch('tesla.json')
        .then(res=> res.json())
        .then(data=> setTeslaCars(data))
    },[])
    return (
        <div>
            <h1>{teslaCars.length}</h1>
            <h1>hello i'm teslaa</h1>
        </div>
    );
};

export default Tesla;