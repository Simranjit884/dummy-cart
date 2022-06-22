import classes from "./CartButton.module.css";
import { uiActions } from "../../store/store-slices/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  const totalCartItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
