import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Countries = () => {

    const [countries, setCountry]=useState([]);
    useEffect(()=>{
        const url=`https://restcountries.com/v3.1/all`;
        console.log(url)
        fetch(url)
        .then(res=>res.json())
        .then(data=> setCountry(data))

    }, [])
    return (
        <div>
            <h1>ccccccccccccccccccc {countries.length}</h1>
           {
               countries.map(country=> <li>
                   <Link to={`/country/${country.name.common}`}>
                       {country.name.common}</Link>
               </li> )
           }
          
        </div>
    );
};

export default Countries;