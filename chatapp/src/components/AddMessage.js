import React from 'react'

export const AddMessage = (props) => {
  console.log(props);
  
  let input 
  return (
    <section id="new-message">
      <input 
        onKeyPress={(e)=>{
        if(e.key==='Enter'){
          props.addMessage(input.value,'Me')
          input.value=''
        }
      }}
      type="text"
      ref={(node)=>{
        input= node
      }}/>
    </section>
  )
}

export default AddMessage