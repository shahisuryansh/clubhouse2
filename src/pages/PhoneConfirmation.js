import React , {useState} from 'react'
import style from '../style/phoneConfirm.module.css'
import {Link} from  'react-router-dom'
import PhoneInput from 'react-phone-number-input'
function PhoneConfirmation() {
    const [value,setValue] = useState() ;
    return (
        <div className= {style.phoneConfirmContainer}>
            <Link exact to ='/' className={style.backBtn}>
                <img src ="/images/arrow.png" alt =""></img>
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput international defaultCountry='US' value={value} onChange = {setValue}></PhoneInput>
            <p>By Entering your number you are agree to out  {' '}
            <span>Terms of Service and Policy . </span>
            Thanks !
            </p>
            <Link exact to = '/code_confirm' className='primaryBtn d-flex align-items-center'>
                Next <img src = "/images/nextArrowIcon.svg" className='ml-1' alt=''></img>
            </Link>
        </div>
    )
}

export default PhoneConfirmation
