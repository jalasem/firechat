import React from 'react'

import './NewChat.css' 

import BackArrow from '../icons/BackArrow'

const NewChat = ({handleNewChatOpen,newChatOpen}) => {
    return (
        <div className="NewChat" style={newChatOpen? {left:'0'} : {left:'-35vw'}}>
            <nav>
                <div className=" header flex items-center">
                    <BackArrow onClick={handleNewChatOpen} style={{cursor:'pointer'}} />
                    <span className="title">New chat</span>
                </div>
            </nav>
            
        </div>
    )
}

export default NewChat
