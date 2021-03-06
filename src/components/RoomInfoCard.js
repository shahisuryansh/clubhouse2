import React , {useState,useEffect} from 'react'
import style from '../style/roomCard.module.css'
import {BsChatDots,BsChatDotsFill,BsFillPersonFill} from 'react-icons/bs'
import data from '../data/roomCard.json'
function RoomInfoCard(props) {
    return (
        <div>
            <h2>Hello</h2>
            {
                data.map((item) => {
                    return(
                       <div>
                           <div>
                               <div className={style.roomCardContainer}>
                                  <h6>{item.title}</h6>
                                  <h2>{item.sub_title}</h2>
                                  <div className={style.roomMembers}>
                                      <div>
                                          <img src = "/images/user-img.jpg" alt = ""/>
                                          <img src = "/images/user-img2.jpg" alt = " "/>
                                      </div>
                                      <div>
                                          {
                                              item.members.map((item) => (
                                                  <p>
                                                      {item.first_name} {item.last_name} <BsChatDots/>
                                                  </p>
                                              )
                                              )
                                          }
                                          <p className='d-flex align-items-center'>
                                              <span className='mr-2'>1.8</span>
                                                <BsFillPersonFill/>
                                                <span className='mx-2'></span> {' '}
                                                <span className='mr-2'>5 </span> <BsChatDotsFill/>
                                              
                                          </p>
                                          </div>
                                  </div>
                                   </div>
                               </div>
                           </div>
                    )
                }
                )
            }
        </div>
    )
}

export default RoomInfoCard
