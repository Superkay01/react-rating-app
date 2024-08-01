import styles from "./styles.module.css";
import iconStar from "../../assets/icon-star.svg";
import RatingNumber from "./RatingNumber";

const Rating = ({ setRating, rating, setStage }) => {
  const submit = () => {
    setStage("step2");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.starWrapper}>
        <img src={iconStar} alt="" />
      </div>
      <h1 className={styles.headingText}>How did we do</h1>
      <p className={styles.subText}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering.
      </p>
      <RatingNumber setRating={setRating} />
      <button className={styles.submitBtn} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
