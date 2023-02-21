import { useState, useEffect } from 'react';
import './App.css';

const Analog = () => {
    const [secondRatio, setsecondRatio] = useState(new Date().getSeconds() / 60)
    const [minuteRatio, setminuteRatio] = useState((secondRatio + new Date().getMinutes()) / 60)
    const [hourRatio, sethourRatio] = useState((minuteRatio + new Date().getHours()) / 12)

    const setClock = () => {
        let secondRatio = new Date().getSeconds() / 60
        let minuteRatio = (secondRatio + new Date().getMinutes()) / 60
        let hourRatio = (minuteRatio + new Date().getHours()) / 12
        setsecondRatio(secondRatio)
        setminuteRatio(minuteRatio)
        sethourRatio(hourRatio)
    }

    useEffect(() => {
        const timerId = setInterval(setClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (

        <div className="clock">
            <div className="hand hour" style={{ transform: `translate(-50%) rotate(${hourRatio * 360}deg)` }}></div>
            <div className="hand minute" style={{ transform: `translate(-50%) rotate(${minuteRatio * 360}deg)` }}  ></div>
            <div className="hand second" style={{ transform: `translate(-50%) rotate(${secondRatio * 360}deg)` }}  ></div>

            <div className="number number1"><div>1</div></div>
            <div className="number number2"><div>2</div></div>
            <div className="number number3"><div>3</div></div>
            <div className="number number4"><div>4</div></div>
            <div className="number number5"><div>5</div></div>
            <div className="number number6"><div>6</div></div>
            <div className="number number7"><div>7</div></div>
            <div className="number number8"><div>8</div></div>
            <div className="number number9"><div>9</div></div>
            <div className="number number10"><div>10</div></div>
            <div className="number number11"><div>11</div></div>
            <div className="number number12"><div>12</div></div>
        </div>

    )
}

export default Analog