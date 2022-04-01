import React from "react";
import styles from "./ContactList.module.css"
import ContactItem from "./ContactItem/ContactItem";

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

    onContactDeleted = (event) => {
        this.props.onContactDeleted(event);
    }

    onShowForm = () => {
        this.props.onShowPage("contactForm");
    }

    render() {

        return (
            <div className="container">
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Phone number</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.state.map(item => (
                        <ContactItem
                            currentItem={item}
                            key={item.id}
                            onContactDeleted={this.onContactDeleted}
                        />
                    ))}
                    </tbody>
                </table>
                <button
                    className={`${styles.buttonAdd} button button--blue`}
                    onClick={this.onShowForm}
                >
                    Add contact
                </button>
            </div>

        )
    }
}

export default ContactList;
