import React, { Component } from 'react';

let Starship = ({data, onClick, onBlur}) => {
    let input = '';
    let speedInput = '';
    let compData = {
        speed: '',
        name: data.name
    };
    
    return (
        <li>
            <span onClick={() => onClick(input.value)}>
                {data.name}
            </span>

            <div>
                Bla: <input width="60" type="text" 
                    ref={node => input = node}
                />
            </div>
            <div>
                Speed <input width="60" type="text" 
                    ref={node => {
                        speedInput = node
                    }}
                    onBlur={() => {
                        compData.speed = speedInput.value;
                        onBlur.call(compData, ' - k/h')
                    }}
                />
            </div>
        </li>
    );
};

export default Starship;