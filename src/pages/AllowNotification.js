import React from 'react'
import style from '../style/phoneConfirm.module.css'
import {Link} from 'react-router-dom'
function AllowNotification() {
    return (
        <div className= {style.phoneConfirmContainer}>
            <div className='text-center'>
                <h1 className='mb-4'>Last Important Step</h1>
                <h1 className='mb-3'>Enable Notification to know when people are speaking</h1>
              <div className={style.notificationContainer}>
                  <div className = "p-3">
                      <h3>"Clubhouse" would like to send you Notification</h3>
                      <p>Notification may include alerts , sounds , and icons badges</p>
                  </div>
                  <div className={style.action_btn}>
                      <Link exact to = "/home">
                          Don't allow
                      </Link>
                      <Link exact to = "/home">
                          Allow
                      </Link>
                      <img src ='/images/handIcon.svg' alt = "" className={style.hand_icon}></img>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default AllowNotification
