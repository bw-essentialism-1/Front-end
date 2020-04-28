// import axios from "axios";

// export const FETCH_VALUES_START = "FETCH_VALUES_START"
// export const FETCH_VALUES_SUCCESS = "FETCH_VALUES_SUCCESS"
// export const FETCH_VALUES_FAIL = "FETCH_VALUES_FAIL"
// export const NEW_VALUE_INCOMING = "NEW_VALUE_INCOMING"
// export const VALUE_ADDED = "VALUE_ADDED"
// export const EDITING_VALUE = "EDITING_VALUE"
// export const VALUE_EDIT_SUCCESS = "VALUE_EDIT_SUCCESS"
// export const DELETE_VALUE = "DELETE_VALUE"
// export const VALUE_DELETE_SUCCESS = "VALUE_DELETE_SUCCESS"

// //axios calls will need to be changed to axiosWithAuth with token header

// export const getValues = () => dispatch => {
//     dispatch({ type: FETCH_VALUES_START })
//     axios.get('http://localhost:5000/api/values') // localhost:5000 URLs/endpoints are placeholders
//         .then(res => { 
//             dispatch({ type: FETCH_VALUES_SUCCESS, payload: res.data })
//         })
//         .catch(err => {
//             dispatch({ type: FETCH_VALUES_FAIL, payload: err.res })
//         })
// }

// export const addValues = value => {
//     return dispatch => {
//         dispatch({ type: NEW_VALUE_INCOMING });
//         axios.post('http://localhost:5000/api/values', value)
//             .then(res => {
//                 dispatch({ type: VALUE_ADDED, payload: res.data })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }

// export const editValues = valueToEdit => {
//     return dispatch => {
//         dispatch({ type: EDITING_VALUE })
//         axios.put(`http://localhost:5000/api/values/${id}`, valueToEdit)
//             .then(res => {
//                 dispatch({ type: VALUE_EDIT_SUCCESS, payload: res.data })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }

// export const deleteValue = value => {
//     return dispatch => {
//         dispatch({ type: DELETING_VALUE })
//         axios.delete(`http://localhost:5000/api/values/${id}` )
//             .then(res => {
//                 dispatch({ type: VALUE_DELETE_SUCCESS, payload: res.data })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
// }