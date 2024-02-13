import ContactItemBody from './ContactItemBody'
import ContactItemImage from './ContactItemImage'
import DeleteButton from './DeleteButton'
import PropTypes from 'prop-types'

function ContactItem({ imageUrl, name, tag, onDelete, id }) {
  return (
    <div className='contact-item'>
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton onDelete={onDelete} id={id} />
    </div>
  )
}

ContactItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ContactItem
