import { useRecoilState } from 'recoil';
import { menu } from '../src/data';
import { cartState } from '../src/state';



const Items = () =>
{
    const [ cart, setCart ] = useRecoilState( cartState );

    const handleAdd = ( name: string ) => () =>
    {
        setCart( {
            ...cart,
            [ name ]: ( cart[ name ] || 0 ) + 1
        } );
    };

    const handleRemove = ( name: string ) => () =>
    {
        const copy = { ...cart };
        if ( copy[ name ] === 1 )
        {
            delete copy[ name ];
            setCart( { ...copy } );
        } else
        {
            setCart( { ...copy, [ name ]: cart[ name ] - 1 } );
        }
    };

    return (
        <div>
            <h2>Avail Items</h2>
            <pre>
                { JSON.stringify( cart, null, 3 ) }
            </pre>
            <ul>
                { menu.map( item => <li key={ item.id }>
                    { item.name }
                    <button onClick={ handleAdd( item.name ) }>add</button>
                    { cart[ item.name ] ? <button onClick={ handleRemove( item.name ) }>
                        remove
                    </button> : null }
                </li> ) }
            </ul>
        </div>
    );
};

export default Items;
