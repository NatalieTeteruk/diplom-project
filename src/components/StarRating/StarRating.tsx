import styles from './StarRating.module.css';

interface StarRatingProps {
  rating: number; 
  maxStars?: number;
}

const StarRating = ({ rating, maxStars = 5 }: StarRatingProps) => (
  <div className={styles.starRating}>
    {"★".repeat(rating) + "☆".repeat(maxStars - rating)}
  </div>
);

export default StarRating;