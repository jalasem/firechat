import React from 'react'

import './NewChat.css' 

import BackArrow from '../icons/BackArrow'

const NewChat = ({handleNewChat,isNewChat}) => {
    return (
        <div className="NewChat" style={isNewChat? {left:'0'} : {left:'-35vw'}}>
            <nav>
                <div className=" header flex items-center">
                    <BackArrow onClick={handleNewChat} style={{cursor:'pointer'}} />
                    <span className="title">New chat</span>
                </div>
            </nav>
            
        </div>
    )
}

export default NewChat
