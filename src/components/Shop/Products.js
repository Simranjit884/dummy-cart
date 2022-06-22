import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id={1}
          title="Test1"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          id={2}
          title="Test2"
          price={14}
          description="This is a second product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          id={3}
          title="Test3"
          price={9}
          description="This is a third product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          id={4}
          title="Test4"
          price={17}
          description="This is a fourth product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          id={5}
          title="Test5"
          price={21}
          description="This is a fifth product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          id={6}
          title="Test6"
          price={11}
          description="This is a sixth product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
