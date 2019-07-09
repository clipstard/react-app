import { defaultStyle } from '../actions';
import * as types from '../constants/actionType';

const initialState = {
    items: [1, 2, 3,],
    itemsById: [
        {
            id: 1,
            title: 'First Item',
            style: defaultStyle
        },
        {
            id: 2,
            title: 'Second Item',
            style: defaultStyle
        },
        {
            id: 3,
            title: 'Third Item',
            style: defaultStyle
        }
    ]
};


export default function items(state = initialState, action) {
    switch (action.type) {
        case types.ADD_ITEM:
            const newId = (state.items.length === 0 ) ? 1 : state.items[state.items.length - 1] + 1;
            return {
                items: state.items.concat(newId),
                itemsById: [
                    ...state.itemsById,
                    {
                        id: newId,
                        title: action.title,
                        style: action.style
                    }
                ]
            };

        case types.REMOVE_ITEM:
            const newItems = state.items.filter((item) => item !== action.id);
            const newItemsById = state.itemsById.filter((item) => item.id !== action.id);
            return {
                items: newItems,
                itemsById: newItemsById
            };

        case types.CHANGE_ITEM_STYLE:
            const newItemsModifiedId = state.itemsById.map((item) => {
                if (item.id === action.id) {
                    item.style = {...action.style};
                }
                return item;
            });
            return {
                items: state.items,
                itemsById: newItemsModifiedId
            };

        default:
            return state;
    }
}