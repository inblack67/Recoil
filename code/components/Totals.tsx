import { useRecoilValue } from "recoil";
import { totalState } from "../src/state";


const Totals = () =>
{
    const totals = useRecoilValue( totalState );

    return (
        <div>
            <h2>Totals</h2>
            <pre>
                { JSON.stringify( totals, null, 2 ) }
            </pre>
        </div>
    );
};

export default Totals;
