import React from 'react'

import ChatItem from '../ChatList/ChatItem'
function StatusList({chats}) {
  return (
    <div className="StatusList">
      <nav className="flex items-center">
        <img src="/images/statusImg.jpg" alt=""/>
        <div className="flex flex-col">
          <span>My Status</span>
          <span className='text-light'>No updates</span>
        </div>
      </nav>
      <div className="status-items-wrapper statuses flex-1 overflow-y-auto">
          <span className="title">RECENT</span>
          {chats.map((chat) => (
            <ChatItem
              name="Alao Idris"
              text="Yesterday at 11.09 PM"
              key={`chat-${chat}`}
            />
          ))}
        
      </div>
    </div>
  )
}

export default StatusList
