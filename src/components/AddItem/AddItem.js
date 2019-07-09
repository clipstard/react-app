import React, {useState} from 'react';
import { addItem } from '../../redux_local/actions';
import './AddItem.css';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    let aux = state.default ? state.default : state.items;
    return {items: aux};
};

const ItemTemplate = (props) => {
    const {dispatch} = props;
    const [inputValue, setInputValue] = useState({title: ''});
    return (
        <>
            <label> Add new Item</label>
            <br />
            <input id="newItem" type="text" value={inputValue.title} onChange={(event) => setInputValue({title: event.target.value})}/>
            <div className="smallDiv inline">
                <button className="smallButton" onClick={() => {
                    dispatch(addItem(inputValue.title));
                    setInputValue({title: ''});
                }}>+</button>
            </div>
        </>
    );
};

const AddItem = connect(mapStateToProps)(ItemTemplate);
export default AddItem;