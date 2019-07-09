import React, {useEffect} from 'react';
import Item from '../Item/item';
import { changeItemStyle } from '../../redux_local/actions';
import './itemList.css';
import { connect } from 'react-redux';
import AddItem from '../AddItem/AddItem';

const mapStateToProps = state => {
    let aux = state.default ? state.default : state.items;
    return {items: aux};
};

const ItemListTemplate = (props) => {
        let {items, dispatch} = props;
        items = items.itemsById;
        let lex = [];
        Object.values(items).forEach((item) => lex.push(item));
        useEffect(() => {
            let title = false;
            const interval = setInterval(() => {
                    if (title) {
                        document.title = `(${lex.length}) items are in the list!`;
                    } else {
                        document.title = props.documentTitle;
                    }
                    title = !title;
                }, 1000);
                return () => {window.clearInterval(interval)}
            });
        return (
            <>
                <AddItem/>
                <ul className="ulClear">
                    {
                        lex.map((item) => {
                            return (
                                <Item
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    handleClick={(event) => {
                                        dispatch(changeItemStyle(item.id, event));
                                    }}
                                    {...props.actions} />
                            )
                        })
                    }
                </ul>
            </>
        );
};

const List = connect(mapStateToProps)(ItemListTemplate);
export default List;