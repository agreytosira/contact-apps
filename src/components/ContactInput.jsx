import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      tag: '',
      addContact: () => {}
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this)
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value
      }
    })
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addContact(this.state)
  }

  render() {
    return (
      <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
        <input type='text' placeholder='Nama' value={this.state.name} onChange={this.onNameChangeEventHandler} />
        <input type='text' placeholder='Tag' value={this.state.tag} onChange={this.onTagChangeEventHandler} />
        <button type='submit'>Tambah</button>
      </form>
    )
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired
}