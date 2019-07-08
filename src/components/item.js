import React, { useState } from 'react';
import { defaultStyle } from '../redux_local/actions';


export const Item = (props) => {
    const [state, setState] = useState(defaultStyle);

        return (
            <li id={props.id}>
               <div onClick={() => {
                   let color = state.color === 'red' ? 'blue' : 'red';
                   setState({...state, color: color});
                   props.handleClick(state);
               }}
                    style={state}>
                   {props.title}
               </div>
            </li>
        );
};