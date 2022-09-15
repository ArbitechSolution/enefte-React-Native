import {Get_User_Profile} from '../types/types';
import axios from 'axios';


export const getUserProfileData =async(dispatch)=>{
    try{
        let apiResponse = await axios.get("https://ac1f-2400-adc5-437-1000-302b-315f-cbf4-6e73.in.ngrok.io/api/user/getProfile?email=zahidriaz125@gmail.com")
        console.log("DataFromAction", apiResponse)
        dispatch({
            type :Get_User_Profile,
            payload :apiResponse
        })
    }catch(e){
        console.log("Error while getting api data in action", e)
    }
   
}



// export const getWallet = () => async (dispatch) => {

//     let address = await loadWeb3();
//     dispatch({
//       type: GET_WALLET_ADDRESS,
//       payload: address,
//     });
//   };