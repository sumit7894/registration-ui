import React, { useState } from 'react'
import styles from './auth.module.css'
import Google from '../../assets/Icons/Google.png';
import Facebook from '../../assets/Icons/Facebook.png';
const Auth = () => {
    const [authMode,setAuthMode] = useState(true);
  return (
    <div className={styles.main__auth}>
        <div className={styles.form__container}>
            <h1  className={styles.form__heading}>
                {authMode ? "Create an Account":"Sign In"}
            </h1>
            <h2 className={styles.form__subheading}>
                {authMode ? "Have an Account?":"New to Our Product?"}
                <span className={styles.toggle__button} onClick={()=>setAuthMode((prev)=>!prev)}>
                    {authMode ? "Sign In":"Create an Account"}
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
                {authMode ? (<></>):(
                    <div className={styles.checkbox__container}>
                        <input type='checkbox'/>
                        <span>Keep me signed in</span>
                    </div>
                )}
                <button type='submit' className={styles.submit__button}>
                    {authMode ? "Create Account":"Sign In"}
                </button>
            </form>
        </div> 
        <label className={styles.message__footer}>
        {authMode ? "By creating account, you agree to our":<></>}
        </label>
        <span className={styles.terms}>
            {authMode ? "Terms of Service":"Forgot your password?"}
        </span>
        <div className={styles.horizontal__line}></div>
        <span className={styles.footer__heading}>
        {authMode ? "Or create an account using:":"Or sign in using:"}
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