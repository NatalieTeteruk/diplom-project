import { useState, ChangeEvent } from "react";
import styles from './Reviews.module.css';
import StarRating from "../StarRating/StarRating";



export interface Review {
  id: string;  
  author: string
  title: string
  details: string
  date: string
  rating: number
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: "1",
      author: "Ivan",
      title: "",
      details: "The book is certainly not for beginners. They will not understand 90% of the content.",
      date: "01.01.2019",
      rating: 4,
    },
    {
      id: "2",
      author: "Max Petrov",
      title: " ",
      details: "The book is certainly not for beginners. They will not understand 90% of the content.",
      date: "05.23.2021",
      rating: 5,
    },
  ]);

  const [currentReview, setCurrentReview] = useState("");

  const currentReviewHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    setCurrentReview(newValue);
  };

  const addReviewHandler = () => {
    if (!currentReview.trim()) return;
    const newReview = {
      id: Date.now().toString(),
      author: "Alexey Lavrov",
      title: " ",
      details: currentReview,
      date: new Date().toLocaleDateString(),
      rating: 5,
    };
    setReviews([newReview, ...reviews]);
    setCurrentReview("");
  };

  return (
    <div>
      <div className={styles.review}>
        <h3>Reviews({reviews.length})</h3>
        <textarea
          value={currentReview}
          placeholder="Provide your text..."
          onChange={currentReviewHandler}
        ></textarea>
        <button onClick={addReviewHandler}>Send review</button>
      </div>
      <div>
        {reviews.map((r) => {
          return (
            <div key={r.id} className={styles.reviewField}>
              <div className={styles.info}>
                <div className={styles.user}>
                  <div className={styles.infoBox}>
                    <p className={styles.author}>{r.author}</p>
                    {/* <p className={styles.rating}>{r.rating} Rating</p> */}
                    <div className="rating-container">
                      <StarRating rating={(r.rating)} />
                    </div>
                    <p className={styles.reviewsTitle}>{r.title}</p>
                  </div>
                </div>
                <div>
                  <p className={styles.date}>{r.date}</p>
                </div>
              </div>

              <div className={styles.content}>
                <p className={styles.feedback}>{r.title}</p>
                <p className={styles.feedbackDetails}>{r.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;