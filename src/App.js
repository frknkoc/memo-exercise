import './App.css';
import { useState, useMemo } from "react";
import Header from './components/Header';
import Usecallback from './components/Usecallback';


function App() {
  const [number, setNumber] = useState(0);

  const data = useMemo(() => {
    return { name: "Mehmet", number };
  }, [number]);

  /*const data = useMemo(() => {
    return { name: "Mehmet", number };
  }, [number]);*/

/* NUMBER HER DEĞİŞTİĞİNDE HEADER DA RENDER OLUR */


  return (
    <div>

      <Header data={data} />

      {/*<Header number={number < 5 ? 0 : number} />*/}
      <hr />

      <h1>{number}</h1>

      <button onClick={() => setNumber(number + 1)}>Click</button>

<hr/><br/><br/><br/>

<Usecallback />
    </div>
  );
}


export default App;
