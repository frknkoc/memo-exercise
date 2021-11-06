import React from 'react'

function Headeriki( {number, increment} ) {
    console.log("Header component Re-render edildi")

    return (
        <div>
                      <h1 style={{ textAlign:"center", marginTop:"30px"}}>
        Header - {number}
      </h1>
      <br /><br />
      <button onClick={increment}>Click</button>

        </div>
    )
}

export default React.memo(Headeriki);


