import { connect } from 'react-redux'
import AddMessage from '../components/AddMessage'
import { addMessage } from '../src/actions'

const mapDispatchToProps = (dispatch) =>({
  addMessage: (message, author)=> {
    dispatch(addMessage(message, author))
  }
})

export const AddMessage = connect(()=>({}), mapDispatchToProps)(AddMessage)