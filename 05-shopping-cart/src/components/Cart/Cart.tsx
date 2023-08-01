import { CartIcon, ClearCartIcon } from '@/components';
import { useId } from 'react';
import './Cart.css';

type CartProps = {};

const Cart: React.FC<CartProps> = ({}) => {
  const cartCheckboxId = useId();

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://picsum.photos/seed/1/100/100' alt='Product 1' />
            <div>
              <strong>Laptop</strong> - $1000
            </div>

            <footer>
              <small>Qty: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
};

export default Cart;
