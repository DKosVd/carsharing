import React from 'react'

export function LiveSearch({ cb, datas, paramsFilterBy }) {
    const [state, setState] = React.useState('')
    const [copyDatas, setCopyDatas] = React.useState([])

    React.useEffect(() => {
        setCopyDatas(datas);
    }, [])

    const handleInput = (e) => {
        setState(e.target.value);
        cb(copyDatas.filter( data => {
            let str = data[`${paramsFilterBy}`].toLowerCase()
            let value = e.target.value.toLowerCase()
            return str.includes(value)
        }))
    }

    return (
        <div className="input_for_search">
            <label> Поиск: <input type="text" onInput={handleInput} value={state} id="search"/> </label>
        </div>
    )
}
