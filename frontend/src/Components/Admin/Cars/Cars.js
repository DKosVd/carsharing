import React from 'react'
import { CarsRow } from '../Cars/CarRows.js'
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { CarInDetail } from './CarInDetail'
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clear, fetchCars } from '../../../store/actions/cars/cars';
import { Loading } from '../../../store/reducers/cars/state';
import { CircularProgress } from '@material-ui/core';
import { LiveSearch } from '../../LiveSearch'
//TODO: Добавление автомобиля + удаление автомобиля + редактирование автомобиля
export default function Cars(props) {
    const dispatch = useDispatch()
    const autos = useSelector(state => state.cars.cars)
    const [filterAutos, setFilterAutos] = React.useState([])
    const LoadingState = useSelector(state => state.cars.LoadingState)
    React.useEffect(() => {
        dispatch(fetchCars())
        return () => dispatch(clear())
    }, [])

    React.useEffect(() => {
        setFilterAutos(autos)
    }, [autos])


    const Livesearch = (data) => {
        setFilterAutos(data)
    }



    if (LoadingState === Loading.LOADING) {
        return (
            <div className="progress_circle">
                <CircularProgress />
            </div>
        )
    }

    return (
        <div>
            <Route exact path={"/admin/autos/"}>
                <h2>Автомобили</h2>
            </Route>
            <Route path={"/admin/autos/:id"}>
                <h2>Информация об автомобиле</h2>
            </Route>
            <Switch>
                <Route exact path="/admin/autos">
                    <div className="search__add">
                        <LiveSearch cb={Livesearch} datas={autos} paramsFilterBy={'model'} />
                        <div>
                            <button className="btn btn-primary" type="button" ><DriveEtaIcon/>+</button>
                        </div>
                    </div>
                    <div className="cars">
                        {filterAutos && filterAutos.map(auto => <CarsRow key={`${auto.id_auto}__${auto.model}`} {...auto} />)}
                    </div>
                </Route>
                <Route path={"/admin/autos/:id"} component={CarInDetail} />
            </Switch>
        </div>
    )
}
