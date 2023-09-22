import Card from "../modules/Card";
import styles from "./DiscountPage.module.css"
function DiscountPage({data}) {
    return (
        <div className={styles.container}>
        <h2>Discount</h2>
        <div className={styles.subContainer}>
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    );
}

export default DiscountPage;