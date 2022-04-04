import React from "react";
import styles from "./Contacts.module.css"
import ContactList from "./ContactList/ContactList";
import Spinner from "../Spinner/Spinner";
import ContactForm from "./ContactForm/ContactForm";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            currentItem: {},
            isEditMode: false,
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
            })
            .catch(error => {
                this.setState({
                    error: error
                });
            });
    }

    componentDidMount() {
        this.getContacts()
    }

    onContactDeleted = contact => {
        this.setState({
            ...this.state,
            items: this.state.items.filter(item => contact.id !== item.id )
        })
    }

    handleFormSubmit = values => {
        if (values.id) {
            this.onEditContact(values);
        } else {
            this.onAddContact(values);
        }
    }

    onAddContact = async contact => {
        const newItem = await fetch(`https://62378af1b08c39a3af813049.mockapi.io/contacts/contacts`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: contact.firstName,
                lastName: contact.lastName,
                phoneNumber: contact.phoneNumber
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((resp) => resp.json());
        this.setState({
            ...this.state,
            items: [...this.state.items, newItem]
        })
    }

    onEditContact = async contact => {
        const updatedItem = await fetch(`https://62378af1b08c39a3af813049.mockapi.io/contacts/contacts/${this.state.currentItem.id}`, {
            method: 'PUT',
            body: JSON.stringify(contact),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((resp) => resp.json());
        this.setState({
            ...this.state,
            items: this.state.items.map(item => updatedItem.id === item.id ? updatedItem : item)
        })
    }

    onShowPage = (pageName, currentItem) => {
        this.setState({
            ...this.state,
            isEditMode: pageName,
            currentItem,
        })
    }

    render() {
        const {error, isLoaded, items, isEditMode, currentItem} = this.state;

        if (error) return (
            <div className="container">
                <p>Error</p>
            </div>
        )
        if (!isLoaded) return(
            <div className="container">
                <Spinner height="100" width="100" color="#ffe07d"/>
            </div>
        )
        if (isEditMode === false) {
            return (
                <div className="container">
                    <ContactList
                        state={items}
                        onContactDeleted={this.onContactDeleted}
                        onShowPage={this.onShowPage}
                    />
                </div>
            );
        }

        if (isEditMode === true) {
            return (
                <div className="container">
                    <ContactForm
                        currentItem={currentItem}
                        handleFormSubmit={this.handleFormSubmit}
                        onShowPage={this.onShowPage}
                    />
                </div>
            );
        }
    }
}

export default Contacts;
