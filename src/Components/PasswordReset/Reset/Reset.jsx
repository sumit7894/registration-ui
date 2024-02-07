import React from 'react'
import styles from './reset.module.css'
import toast,{Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Reset = () => {
    const navigate = useNavigate();
    const handleResetButton =()=>{
        navigate('/verification');
    }
    const handleBackButton =()=>{
        navigate('/');
    }
  return (
    <div className={styles.main}>
        <div className={styles.container}>
        <div className={styles.heading}>Password Reset </div>
        <div className={styles.sub__heading}>We Will Help You Reset your Password</div>
        <div className={styles.input__container}>
            <label>Email</label>
            <input type='text' placeholder='Enter Email Address'/>
        </div>
        <button className={styles.reset__button}
        onClick={handleResetButton}
        >
            Reset Password
        </button>
        <div className={styles.horizontal__line}></div>
        <span className={styles.bottom__heading}>
            Remembered your Password?
        </span>
        <div className={styles.footer__button}
        onClick={handleBackButton}
        >
            Back to Sign in
        </div>
        <Toaster position="top-right" reverseOrder={false}/>
    </div>
    </div>
    
  )
}

export default Reset