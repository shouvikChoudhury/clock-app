import { useState, useEffect } from 'react';

const Digital = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    return (
        <div className='mt-5 ml-5 pl-5'>
            <i><b>Time </b></i> <b> : {date.toLocaleTimeString('en-US')}</b>
        </div>
    )
}

export default Digital