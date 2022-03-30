import React from "react";
import styles from "./Contacts.module.css"
import ContactList from "./ContactList/ContactList";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import ContactForm from "./ContactForm/ContactForm";

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
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

    onAddContact = contact => {
        fetch(`https://62378af1b08c39a3af813049.mockapi.io/contacts/contacts`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: contact.firstName,
                lastName: contact.lastName,
                phoneNumber: contact.phoneNumber
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    render() {
        const {error, isLoaded, items} = this.state;

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

        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/"
                           element= {<ContactList state={items} onContactDeleted={this.onContactDeleted} />} />
                    <Route path="/form"
                           element={<ContactForm handleFormSubmit={this.handleFormSubmit}/> }/>
                </Routes>
            </BrowserRouter>

        )
    }
}

export default Contacts;
