import styles from "./styles.module.css";

const RatingNumber = ({ rating, setRating }) => {
  const updateRating = (number) => {
    setRating(number);
  };

  const ratingList = [1, 2, 3, 4, 5];
  return (
    <div className={styles.ratingBox}>
      {ratingList.map((r) => {
        const activeStyle = rating === r ? styles.ratingBtnActive : "";
        return (
          <button
            onClick={() => updateRating(r)}
            className={`${styles.ratingBtn} ${activeStyle}`}
            key={r}
          >
            {r}
          </button>
        );
      })}
    </div>
  );
};

export default RatingNumber;
