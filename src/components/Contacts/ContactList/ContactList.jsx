import React from "react";
import styles from "./ContactList.module.css"
import {Link} from "react-router-dom";
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
                            onContactDeleted={this.onContactDeleted}/>
                    ))}
                    </tbody>
                </table>
                <Link to='/form'>
                    <button className={`${styles.buttonAdd} button button--blue`} >Add contact</button>
                </Link>
            </div>

        )
    }
}

export default ContactList;
