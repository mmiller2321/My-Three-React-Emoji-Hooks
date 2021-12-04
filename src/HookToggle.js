import React, { useState } from 'react';

const HookToggle = () => {
    let [smile, setSmile] = useState(true);
    
    return (
        <p onClick={() => setSmile(!smile)} >
            {smile ? "🦄" : "🐔"}
        </p >
    );
};

export default HookToggle;