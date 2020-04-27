import {
    FETCH_VALUES_START,
    FETCH_VALUES_SUCCESS,
    FETCH_VALUES_FAIL,
    NEW_VALUE_INCOMING,
    VALUE_ADDED,
    EDITING_VALUE, 
    VALUE_EDIT_SUCCESS, 
    DELETE_VALUE, 
    VALUE_DELETE_SUCCESS  
} from "../actions"

const initialState = {
    values: [],
    error: ""
}

const reducer = (state = initialState, action) => {

    switch (action.type){
        case FETCH_VALUES_START:
            return{
                ...state,
            };
        case FETCH_VALUES_SUCCESS:
            return {
                ...state,
                values: action.payload,
                error: ""
            }
        case FETCH_VALUES_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case NEW_VALUE_INCOMING:
            return{
                ...state,
                error: ""
            };
        case VALUE_ADDED:
            return{
                ...state,
                error: "",
                values: action.payload
            }
        case EDITING_VALUE:
            return{
                ...state,
                error: "",
            }
        case VALUE_EDIT_SUCCESS:
            return{
                ...state,
                error:"",
                values: action.payload
            }
        case DELETE_VALUE:
            return{
                ...state,
                error: "",
            }
        case VALUE_DELETE_SUCCESS:
            return {
                ...state,
                error:"",
                values: action.payload
            }
        default: 
            return state;
        }

}
            
     

export default reducer;