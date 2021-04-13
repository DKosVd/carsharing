import { combineReducers } from "redux"
import carReducer from "./car/car"
import carsReducer from "./cars/cars"
import CurrentUserReducer from "./currentUser/currentUser"
import userReducer from "./user/users"
import usersReducer from "./users/users"
import OrdersReducer from "./orders/orders"
import OrderReducer from "./order/order"

export const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer,
    currentUser: CurrentUserReducer,
    cars: carsReducer,
    car: carReducer,
    orders: OrdersReducer,
    order: OrderReducer
})