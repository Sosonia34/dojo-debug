import React, { useEffect, useState } from 'react';

const Beers = () => {

    const [beers, setBeers] = useState();

    useEffect(()=>{
        fetch('https://api.punkapi.com/v2/beers')
        .then(r => r.json())
        .then(data => setBeers(data))
}, [])
   
    return (
        <>
            
            {beers && beers.map((beers) => (
                <tr key={beers.name}>
                <td>{beers.index}</td>
                <td>{beers.name}</td>
                <td>{beers.description}</td>
                <td><img src={beers.image_url} height="200px" alt={beers.index}/></td>
              </tr>
            
            ))}
            
        </>
    );
}

export default Beers