import React from 'react'
import styles from './auth.module.css'
import Google from '../../assets/Icons/Google.png';
import Facebook from '../../assets/Icons/Facebook.png';
const Auth = () => {
  return (
    <div className={styles.main__auth}>
        <div className={styles.form__container}>
            <h1  className={styles.form__heading}>
                Create an Account
            </h1>
            <h2 className={styles.form__subheading}>
                Have an Account?
                <span className={styles.toggle__button}>
                    Sign In
                </span>
            </h2>
        <div className={styles.main__form__container}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className={styles.input__container}>
                <label>Email</label>
                <input type='email'
                placeholder='Enter Email Address'
                />
                </div>
                <div className={styles.input__container}>
                <label>Password</label>
                <input type='password'
                placeholder='Create Password'
                />
                </div>
                <button type='submit' className={styles.submit__button}>
                    Create Account
                </button>
            </form>
        </div> 
        <label className={styles.message__footer}>
            By creating account, you agree to our
        </label>
        <span className={styles.terms}>Terms of Service</span>
        <div className={styles.horizontal__line}></div>
        <span className={styles.footer__heading}>
            Or create an account using:
        </span>
        <div className={styles.footer__cards}>
            <img src={Google} alt='google'/>
            Continue with Google
        </div>
        <div className={styles.footer__cards}>
            <img src={Facebook} alt='facebook'/>
            Continue with Facebook
        </div>
        </div>
    </div>
  )
}

export default Auth