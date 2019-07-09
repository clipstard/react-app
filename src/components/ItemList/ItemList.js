import React from 'react';
import Item from '../Item/item';
import { changeItemStyle } from '../../redux_local/actions';
import './itemList.css';
import { connect } from 'react-redux';
import AddItem from '../AddItem/AddItem';

const mapStateToProps = state => {
    let aux = state.default ? state.default : state.items;
    return {items: aux};
};

export class ItemList extends React.Component {
    render() {
        let {items, dispatch} = this.props;
        items = items.itemsById;
        let lex = [];
        Object.values(items).forEach((item) => lex.push(item));
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
                                    {...this.props.actions} />
                            )
                        })
                    }
                </ul>
            </>
        );
    }

}

const List = connect(mapStateToProps)(ItemList);
export default List;