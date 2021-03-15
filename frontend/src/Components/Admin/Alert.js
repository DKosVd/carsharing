import React from 'react'

export default function Alert({ text, alert }) {
    const [hide, setHide] = React.useState(true);
    React.useEffect(() => {
        const timer = setTimeout( () => {
            setHide(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            {hide && <div className={`alert ${alert}`}>
                <p>{text}</p>
            </div>}
        </>
    )
}
