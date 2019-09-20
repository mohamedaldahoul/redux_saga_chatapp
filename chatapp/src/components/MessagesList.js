import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message';

export const MessagesList = ({messages}) =>{
  if(messages!==undefined){
    return (
      <section id="messages-list">
        <ul>
          {messages.map(message=>(
            <Message 
              key={message.id}
              {...message}
            />
          ))}
        </ul>
      </section>
    )
  }else{
    return []
  }
}
MessagesList.PropTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			message: PropTypes.string.isRequired,
			author: PropTypes.string.isRequired,
		}).isRequired
	).isRequired
}


export default MessagesList