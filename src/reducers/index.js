import { combineReducers } from "redux";

let searchList = [];

const searchReducer = (list = searchList, action) => {
    if(action.type==='SEARCH_RESULT'){
        searchList.push(...action.payload)
        console.log(searchList)
        return [...searchList]
    }
    return list;
}



export default combineReducers({
    search: searchReducer
})