1. create reducer - reducer.js 

// create ONLY action types -  that can be used anywhere 
export const reducer = (state, action ) => { 
    if(action.type === "ADD_ITEM"){
    ......
    }
    
2.  import reducer and use it anywhere 

create and add defaultState
const [state, dispatch] =useReducer(reducer, defaultState) 
    
3. use dispatch like method 
    
dispatch({ type: "ADD_ITEM", payload: newItem}) 
