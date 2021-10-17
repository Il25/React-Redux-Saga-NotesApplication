import { actionsTypes } from "./actionsTypes";

const initialState = {
  list: [],
  editNote: {}
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.ADD_NOTE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case actionsTypes.SAVE_NOTE_CHANGES:
      return {
        ...state,
        list: state.list.map(person => {
          if (person?.id === action?.payload?.id) {
            return {
              ...person,
              ...action?.payload,
            }
          } else {
            return person;
          }
        }),
      };  
    case actionsTypes.DELETE_NOTE:
      return {
        ...state,
        list: [...state.list].filter(note => note.id !== action.payload),
      };  
    default:
      return state;
  };
};

export default notesReducer;