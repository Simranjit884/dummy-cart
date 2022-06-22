import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test1"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          title="Test2"
          price={6}
          description="This is a second product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          title="Test3"
          price={6}
          description="This is a third product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          title="Test4"
          price={6}
          description="This is a fourth product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          title="Test5"
          price={6}
          description="This is a fifth product - amazing!"
        />
      </ul>
      <ul>
        <ProductItem
          title="Test6"
          price={6}
          description="This is a sixth product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
