import PropTypes from 'prop-types';
import style from "./ContactItem.module.css"

export const ContactItem = ({contacts, onDeleteContact}) => {
    return contacts.map(contact => <li key={contact.id} className={style.contactItem}>{contact.name}: {contact.number}
    <button type="button" className={style.deleteButton} onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>)
}

ContactItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}