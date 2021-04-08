import React from 'react'
import ReactDOM from 'react-dom'
const notification = document.querySelector('#notification');

export default function Alert({ text, alert }) {
    const [hide, setHide] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setHide(false)
        }, 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [])
    return ReactDOM.createPortal(
        <>
            {hide && <div className={`alert ${alert}`}>
                <p>{text}</p>
            </div>}
        </>,
        notification
    )
}
