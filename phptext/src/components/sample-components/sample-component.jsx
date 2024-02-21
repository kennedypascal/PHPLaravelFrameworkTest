import React from 'react';
import axios from 'axios';

function callServer() {
    axios.get('http://localhost:8000/test', {
        params: {
            table: 'sample',
        },
    }).then((Response) => {
        console.log(response.data);
    });
}

export function SampleComponent() {
    return (
        <div>
            This is a sample component
            {callSever()}
        </div>
    );
}