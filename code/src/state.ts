import { atom, selector } from "recoil";
import { shippingPrices } from "./data";

export const cartState = atom( {
    key: 'cartState',
    default: {}
} );

export const shippingState = atom( {
    key: 'shippingState',
    default: 'US'
} );

// computed val from state
export const totalState = selector( {
    key: 'totalState',
    get: ( { get } ) =>
    {
        const cart = get( cartState );
        const ship = get( shippingState );
        const shippingTotal = shippingPrices[ ship ];
        const cartTotal = Object.entries( cart ).reduce( ( acc, curr ) =>
        {
            return acc + 1;
        }, 0 );
        return {
            cartTotal,
            shippingTotal,
            total: cartTotal + shippingTotal
        };
    }
} );