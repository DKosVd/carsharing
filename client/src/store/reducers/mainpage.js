import { getCars } from "../../api/api";
import { setCar } from "../actions/mainpage";


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
        default: return state;
    }
}

export const setCars = (type) => (dispatch) => {
    getCars(type)
        .then( cars => {
            dispatch(setCar(cars))
        })
}


export default mainpage;