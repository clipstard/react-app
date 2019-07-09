import React, { useState } from 'react';
import './item.css';
import { connect } from 'react-redux';
import { removeItem, defaultStyle } from '../../redux_local/actions';


const mapStateToProps = state => {
    let aux = state.default ? state.default : state.items;
    return {items: aux};
};

const ItemTemplate = (props) => {
    const [state, setState] = useState(defaultStyle);
    const {dispatch} = props;
    return (
        <li id={props.id}>
            <div className="smallDiv inline">
                <div className="inline" onClick={() => {
                    let color = state.color === 'red' ? 'blue' : 'red';
                    setState({...state, color: color});
                    props.handleClick(state);
                }}
                     style={state}>
                    {props.title}
                </div>
                <button className="smallButton" onClick={() => dispatch(removeItem(props.id))}>x</button>
            </div>
        </li>

    );
};

const Item = connect(mapStateToProps)(ItemTemplate);
export default Item;