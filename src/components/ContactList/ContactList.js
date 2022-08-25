import { Component } from "react"
import { ContactItem } from "components/ContactItem/ContactItem"
import PropTypes from "prop-types";
import style from "./ContactList.module.css"

export class ContactList extends Component {
    
    render() {
        const {contacts, onDeleteContact} = this.props
        return (
            <ul className={style.contactsList}>
                <ContactItem contacts={contacts} onDeleteContact={onDeleteContact}/>
            </ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}