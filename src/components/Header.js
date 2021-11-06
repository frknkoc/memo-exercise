import React from 'react'

function Header( {number, data} ) {

    console.log("Header component Re-render edildi")
    return ( 
        <div>
            <h1 style={{ textAlign:"center", marginTop:"30px"}}>
        Header - {number}
      </h1>
      <br /><br />

      <p  style={{ textAlign:"center"}}>{JSON.stringify(data)}</p>
        </div>
    )
}

export default React.memo(Header);
