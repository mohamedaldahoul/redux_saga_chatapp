import React from 'react'

export const Message = ({message, author}) => (
  <p>
    <i>{author}</i>: {message}
  </p>
)

export default Message