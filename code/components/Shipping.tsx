import { useRecoilState } from "recoil";
import { shippingPrices } from "../src/data";
import { shippingState } from "../src/state";

const Shipping = () =>
{
    const [ ship, setShip ] = useRecoilState( shippingState );

    const handleShip = ( country: string ) => () =>
    {
        setShip( country );
    };

    return (
        <div>
            <h2>Shipping</h2>
            {/* <pre>
                { JSON.stringify( Object.entries( shippingPrices ), null, 2 ) }
            </pre> */}
            <ul>
                { Object.entries( shippingPrices ).map( data =>
                {
                    return <li key={ data[ 0 ] }>
                        { data[ 0 ] } : { data[ 1 ].price }
                        <button onClick={ handleShip( data[ 0 ] ) }>ship</button>
                    </li>;
                } ) }
            </ul>
        </div>
    );
};

export default Shipping;
