import { useRecoilValue } from "recoil";
import { menu } from "../src/data";
import { cartState } from "../src/state";


const Cart = () =>
{

    // for reading purposes only
    const cart = useRecoilValue( cartState );

    return (
        <div>
            <h2>Cart</h2>
            {Object.entries( cart ).length === 0 ? <span>No Items.</span> : <ul>
                <pre>
                    { JSON.stringify( cart, null, 2 ) }
                </pre>
            </ul> }
        </div>
    );
};

export default Cart;
