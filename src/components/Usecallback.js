import { useState, useMemo, useCallback } from "react";
import Headeriki from './Headeriki';

function Usecallback() {
    const [number, setNumber] = useState(0);

    const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
    }, []);  


    return (
        <div>

            <Headeriki increment={increment} />
            <hr/>

            {/*<Header number={number < 5 ? 0 : number} />*/}

            <h1>{number}</h1>


        </div>
    )
}

export default Usecallback




