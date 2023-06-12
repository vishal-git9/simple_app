interface change {
    data:string
}
const intialState:change = {
    data:""
}

export const changeReducer = (state=intialState,{type,payload}:{type:string,payload:string})=>{
    switch(type){
        case "GET_CHANGE_VAL":{
            return {
                ...state,data:payload
            }
        }

        default:{
            return state
        }
    }
}