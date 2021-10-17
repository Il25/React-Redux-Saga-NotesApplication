import { actionsTypes } from "./actionsTypes";

export const setData = (data) => {
    return({
        type: actionsTypes.ADD_NOTE,
        payload: data,
    });
};

export const saveChangesData = (user) => {
    return({
        type: actionsTypes.SAVE_NOTE_CHANGES,
        payload: user,
    });
};

export const deleteData = (data) => {
    return({
        type: actionsTypes.DELETE_NOTE,
        payload: data,
    });
};