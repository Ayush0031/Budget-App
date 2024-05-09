import {ADD_TO_LIST} from   './constants';

const initialState={
    budgetItems:[],
};
    

export const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_LIST:
            return{
                ...state,
                budgetItems:[...state.budgetItems,action.data],
    }
        default:
            return state
    }

}