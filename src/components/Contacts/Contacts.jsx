import React from "react";
import styles from "./Contacts.module.css"
import ContactItem from "./ContactItem/ContactItem";
import ContactForm from "./ContactForm/ContactForm";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            showForm: false,
        }
    }

    getContacts = () => {
        fetch('https://62378af1b08c39a3af813049.mockapi.io/contacts/contacts')
            .then(response => response.json())
            .then(result => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                console.log(result)
                }
            )
            .catch(error => {
                this.setState({
                    error: error
                });

            });
    }

    componentDidMount() {
        this.getContacts()
    }



    render() {
        const {error, isLoaded, items} = this.state;

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
                    {items.map(item => (
                        <ContactItem
                            currentItem={item}
                            key={item.id}/>
                    ))}
                    </tbody>
                </table>
                <button className={`${styles.buttonAdd} button button--blue`}>Add contact</button>
                <ContactForm />
            </div>
        )
    }
}

export default Contacts;
