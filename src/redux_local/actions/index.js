import * as types from '../constants/actionType';

export const defaultStyle = {color: 'red', backgroundColor: 'gray'};

export function addItem(title, style = defaultStyle) {
    return {
        type: types.ADD_ITEM,
        title: title,
        style: {...defaultStyle, ...style}
    }
}
export function removeItem(id) {
    return {
        type: types.REMOVE_ITEM,
        id
    }
}
export function changeItemStyle(id, style = defaultStyle) {
    return {
        type: types.CHANGE_ITEM_STYLE,
        id,
        style: style
    }
}