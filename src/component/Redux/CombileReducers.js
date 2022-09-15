import { combineReducers } from "redux";
import {setProfileData} from "./reducers/getUserDta"
const allReducer = combineReducers({
    setProfileData:setProfileData,
})
export default allReducer;