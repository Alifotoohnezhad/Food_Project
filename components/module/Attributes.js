import Choice from "../icons/Choice (2)";
import Clock from "../icons/Clock (2)";
import Fast from "../icons/Fast (2)";
import Food from "../icons/Food (2)";
import styles from "./Attributes.module.css";

function Attributes() {
  return (
    <div className={styles.container}>
      <h3>Why us?</h3>
      <div className={styles.subContainer}>
        <div>
          <Fast />
          <p>Fast</p>
        </div>
        <div>
          <Food />
          <p>Best Restaurants</p>
        </div>
        <div>
          <Choice />
          <p>Your Choice</p>
        </div>
        <div>
          <Clock />
          <p>24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;