import React from 'react'
import styles from './reset.module.css'
import toast,{ ToastBar, Toaster } from 'react-hot-toast'
const Reset = () => {
    const handleSubmit =()=>{
        toast.success('Link has been sent to the given mail address!');
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
        onClick={handleSubmit}
        >
            Reset Password
        </button>
        <div className={styles.horizontal__line}></div>
        <span className={styles.bottom__heading}>
            Remembered your Password?
        </span>
        <div className={styles.footer__button}>
            Back to Sign in
        </div>
        <Toaster position="top-right" reverseOrder={false}/>
    </div>
    </div>
    
  )
}

export default Reset