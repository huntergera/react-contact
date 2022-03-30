import React from "react";
import styles from "./ContactItem.module.css"
import {Link} from "react-router-dom";

class ContactItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

    onDeleteContact = () => {
        fetch(`https://62378af1b08c39a3af813049.mockapi.io/contacts/contacts/${this.props.currentItem.id}`, {
            method: 'DELETE',
        })
        this.props.onContactDeleted(this.props.currentItem);
    }

    render() {
        const {id, firstName, lastName, phone} = this.props.currentItem;

        return (
            <tr key={id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
                <td>
                    {/*<Link to='/form'>*/}
                        <button className={`${styles.buttonEdit} button button--orange`}>Edit</button>
                    {/*</Link>*/}
                    <button className="button" onClick={this.onDeleteContact}>Delete</button>
                </td>
            </tr>

        )
    }
}

export default ContactItem;
