import React from 'react'
import styles from './confirm.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
const Confirm = () => {
    const navigate = useNavigate();
    const handleSubmit =()=>{
        toast.success("Code verified successfully");
        setTimeout(()=>{
            navigate('/confirmation');
        },900)
    }
    const handleResend =()=>{
        toast.success("Code Resent")
    }
  return (
    <div className={styles.main}>
        <div className={styles.container}>
        <div className={styles.heading}>Confirm Email </div>
        <div className={styles.sub__heading}>Check Your Email and Enter Confirmation Code</div>
        <div className={styles.input__container}>
            <label>Confirmation Code</label>
            <input type='text' placeholder='Enter Code'/>
        </div>
        <button className={styles.reset__button}
        onClick={handleSubmit}
        >
            Reset Password
        </button>
        <div className={styles.horizontal__line}></div>
        <span className={styles.bottom__heading}>
        Haven’t received your code?
        </span>
        <div className={styles.footer__button}
        onClick={handleResend}
        >
        Resend Code
        </div>
        <Toaster position="top-right" reverseOrder={false}/>
    </div>
    </div>
  )
}

export default Confirm