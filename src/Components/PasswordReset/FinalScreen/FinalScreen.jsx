import React from 'react'
import styles from './finalscreen.module.css'
import toast,{ Toaster } from 'react-hot-toast'
import Mail from '../../../assets/Icons/mail.png'
const FinalScreen = () => {
    const handleResend =()=>{
        toast.success("Confirmation mail has been sent again!")
    }
  return (
    <div className={styles.main}>
        <div className={styles.container}>
        <div>
            <img src={Mail} alt='mail'/>
        </div>
        <div className={styles.heading}>Almost There! </div>
        <div className={styles.sub__heading}>
        Check your email inbox and confirm your account
        </div>
        <div className={styles.horizontal__line}></div>
        <span className={styles.bottom__heading}>
        Didn’t receive any mail?
        </span>
        <div className={styles.footer__button}
        onClick={handleResend}
        >
        Resend Confirmation
        </div>
        <Toaster position="top-right" reverseOrder={false}/>
    </div>
    </div>
  )
}

export default FinalScreen