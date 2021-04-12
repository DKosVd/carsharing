import React from 'react'
import { useParams } from 'react-router-dom'
import { Goback } from '../GoBack'
import { useDispatch, useSelector } from 'react-redux';
import { clear, fetchCar } from '../../../store/actions/car/car';
import { Loading } from '../../../store/reducers/car/state';
import { CircularProgress } from '@material-ui/core';

export function CarInDetail() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const auto = useSelector(state => state.car.car)
    const LoadingState = useSelector(state => state.car.LoadingState)
    React.useEffect(() => {
        dispatch(fetchCar(id))
        return () => dispatch(clear())
    }, [])

    if (LoadingState === Loading.LOADING) {
        return (
            <div className="progress_circle">
                <CircularProgress />
            </div>
        )
    }

    return (
        <>
        <Goback/>
            <div className="car_detail">
                <div className="car_detail_body">
                    <div className="car_detail_img">
                        <img src={auto.src_img} />
                    </div>
                    <div className="car_detail_characteristics">
                        <p className="car_detail_characteristics_title">Характеристика: </p>
                        <table className="car_detail_characteristic_table">
                            <tbody>
                                <tr>
                                    <th>Трансмиссия</th>
                                    <td>{auto?.transmissions && auto?.transmissions[0]?.name_trans}</td>
                                </tr>
                                <tr>
                                    <th>Привод</th>
                                    <td>{auto.drives && auto?.drives[0]?.name_drive}</td>
                                </tr>
                                <tr>
                                    <th>Руль</th>
                                    <td>{auto.rudders && auto.rudders[0]?.name_rudder}</td>
                                </tr>
                                <tr>
                                    <th>Количество мест</th>
                                    <td>{auto?.seats}</td>
                                </tr>   
                                <tr>
                                    <th>Тип кузова</th>
                                    <td>{auto.type_of_autos && auto.type_of_autos[0]?.name_type}</td>
                                </tr>
                                <tr>
                                    <th>Цена за час</th>
                                    <td>{auto.price_values && auto.price_values[0]?.per_hour}</td>
                                </tr>
                                <tr>
                                    <th>В наличии</th>
                                    <td>{`${auto.is_present ? 'Да': 'Нет'}`}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
