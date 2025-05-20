import React, { useState } from 'react';
import styles from './SubscribeForm.module.css';

type SubscribeFormProps = {
  email: string;
  onEmailChange: (email: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export const SubscribeForm = ({ 
  email, 
  onEmailChange, 
  onSubmit 
}: SubscribeFormProps) => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(e);
    setIsSent(true);
  };

  if (isSent) {
    return <p className={styles.successMessage}>Thank you! We sent an email to {email}</p>;
  }

  return (
    <div className={styles.letter}>
      <div className={styles.wrapSubscribe}>
        <div>
          <h3 className={styles.titleForm}>Subscribe to Newsletter</h3>
          <h4 className={styles.subscribeText}>
            Be the first to know about new IT books, upcoming releases, exclusive offers and more.
          </h4>
        </div>
        <div className={styles.emailWrap}>
          <form onSubmit={handleSubmit} className={styles.formBox}>
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="Your email"
              className={styles.formInput}
              required
            />
            <button type="submit" className={styles.formBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;