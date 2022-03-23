import React from "react";
import styles from "./ContactItem.module.css"

class ContactItem extends React.Component {
    render() {
        const {firstName, lastName, phone} = this.props.currentItem;

        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phone}</td>
                <td>
                    <button className={`${styles.buttonEdit} button button--orange`}>Delete</button>
                    <button className="button">Delete</button>
                </td>
            </tr>
        )
    }
}

export default ContactItem;
