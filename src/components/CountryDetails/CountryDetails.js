 
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { countryName } = useParams();

 
    return (
        <div>
            <h1>country details for  {countryName} </h1>
           
             
            
        </div>
    );
};

export default CountryDetails;