import {Get_User_Profile} from "../types/types";
 let initialState ={currentData:[]};

 export const setProfileData =(state= initialState,action)=>{
    switch(action.type){
        case Get_User_Profile :
            return{
                ...state,
                currentData:action.payload
            }
            default : return {...state}
    }

 }



// export const setCurrentBpTokens =(state= initialState,action)=>{
//     switch(action.type){
//         case GET_CURRENT_BP_TOKENS:
//         return{
//             ...state,
//             currentBp:action.payload
//         }
//         default :return {...state}
//     }

// }