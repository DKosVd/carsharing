import { getCars } from "../../api/api";
import { setCar, setLoading } from "../actions/mainpage";


let initialState = {
    cars: [],
    isLoading: false,
    tabs: ["Все машины", "Седан", "Внедорожник", "Минивэн"]
}


function mainpage(state = initialState, action) {
    switch(action.type) {
        case 'SET_CARS':
            return {
                ...state,
                cars: [...action.cars],
                isLoading: true,
            }
        case 'SET_LOADING': 
            return {
                ...state,
                isLoading: action.value
            }
        default: return state;
    }
}

export const setCars = (type) => (dispatch) => {
    dispatch(setLoading(false))
    getCars(type)
        .then( cars => {
            dispatch(setCar(cars))
        })
}


export default mainpage;