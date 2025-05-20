import { useState } from 'react';
import styles from './Account.module.css';
import { Link } from 'react-router';
import booksImg from '../../assets/img/books2.png';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Signing in with:', formData.email, formData.password);
    } else {
      console.log('Signing up with:', formData);
    }
  };

  return (
    <div>
       <Link to="/" className={styles.back2} aria-label="Back to home">
        &#8592; Back to home
      </Link>
       <div className={styles.accountContainer}>
      <img src={booksImg} alt="" className={styles.bookImg}/>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${isLogin ? styles.active : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <button
          className={`${styles.tabButton} ${!isLogin ? styles.active : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>
      <div className={styles.form}>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        {!isLogin && (
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Your name'
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.field}
            />
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your email'
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.field}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Your password'
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className={styles.field}
          />
         
         {isLogin && ( <Link to="" className={styles.forgotLink} >
            Forgot password?
          </Link> )}
        </div>
        {!isLogin && (<div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>Confirm password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Confirm your password'
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            className={styles.field}
          />
         </div>
         )}
         <button type="submit" className={styles.submitButton}>
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
       </form>
       
      </div>
    </div>
    </div>
   
  );
};

export default Account;

