import { useCart } from "@/hooks/useCart";
import "./Debugger.css";

type DebuggerProps = {};

const Debugger: React.FC<DebuggerProps> = ({}) => {
  const { cartProducts } = useCart();

  const cartProductsToDisplay = cartProducts.map((product) => {
    const { title, quantity } = product;
    return { title, quantity };
  });

  return (
    <div className="debugger">
      <label htmlFor="toggle-debugger">Toggle debugger</label>
      <input type="checkbox" id="toggle-debugger" hidden />
      <p>{JSON.stringify(cartProductsToDisplay, null, 2)}</p>
    </div>
  );
};

export default Debugger;
