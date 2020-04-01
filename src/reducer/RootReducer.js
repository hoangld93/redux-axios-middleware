import { combineReducers } from 'redux';
import HomeReducer from '../reducer/HomeReducer';
import reducer from '../reducer/reducer';


export default combineReducers({
    temp: reducer,
    home: HomeReducer
});