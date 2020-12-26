import Cart from "../components/Cart";
import Items from "../components/Items";
import Shipping from "../components/Shipping";
import Totals from "../components/Totals";

const index = () =>
{
  return (
    <div>
      <Items />
      <Cart />
      <Shipping />
      <Totals />
    </div>
  );
};

export default index;
