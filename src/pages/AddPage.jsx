import React from 'react'
import { addContact } from '../utils/api'
import ContactInput from '../components/ContactInput'
import { useNavigate } from 'react-router-dom'
import { LocaleConsumer } from '../contexts/LocaleContext'

function AddPage() {
  const navigate = useNavigate()

  async function onAddContactHandler(contact) {
    await addContact(contact)
    navigate('/')
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <section>
            <h2>{locale === 'id' ? 'Add Contact' : 'Tambah kontak'}</h2>
            <ContactInput addContact={onAddContactHandler} locale='locale' />
          </section>
        )
      }}
    </LocaleConsumer>
  )
}

export default AddPage
