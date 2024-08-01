import styles from "./Result.module.css";
import IllustrationImage from "../../assets/illustration-thank-you.svg";

const Result = ({ rating, setStage }) => {
  const goBack = () => {
    setStage("step1");
  };
  return (
    <div className={styles.wrapper}>
      <img src={IllustrationImage} alt="Illustration" />
      <div className={styles.resultInfo}>You selected {rating} out of 5</div>
      <div className={styles.greeting}>
        <h1>Thank You!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!.
        </p>
      </div>
      <button onClick={goBack} className={styles.back}>
        Back
      </button>
    </div>
  );
};

export default Result;
