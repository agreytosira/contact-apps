import PropTypes from 'prop-types'

const ContactItemBody = ({ name, tag }) => {
  return (
    <div>
      <div className='contact-item__body'>
        <h3 className='contact-item__title'>{name}</h3>
        <p className='contact-item__username'>@{tag}</p>
      </div>
    </div>
  )
}

ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired
}

export default ContactItemBody
