import styles from "./Companies.module.css";

import SpaceX from "../icons/SpaceX (2)";
import Tesla from "../icons/Tesla (2)";
import Apple from "../icons/Apple";
import Binance from "../icons/Binance (2)";

function Companies() {
  return (
    <div className={styles.container}>
      <Apple />
      <SpaceX />
      <Binance />
      <Tesla />
    </div>
  );
}

export default Companies;
