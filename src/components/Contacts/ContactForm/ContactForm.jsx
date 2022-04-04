import React from "react";
import styles from "./ContactForm.module.css"

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
        }
    };

    componentDidMount() {
        this.setState({
            ...this.state,
            firstName: this.props.currentItem ? this.props.currentItem.firstName : "",
            lastName: this.props.currentItem ? this.props.currentItem.lastName : "",
            phone: this.props.currentItem ? this.props.currentItem.phone : "",
        });
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        })
    };

    onSaveChanges = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit({
            ...this.state,
            id: this.props.currentItem?.id,
        });
        this.onShowContacts();
    }

    onShowContacts = () => {
        this.props.onShowPage(false);
    }

    render() {
        return (
            <form onSubmit={this.onSaveChanges} className={styles.form}>
                <div className="fieldWrap">
                    <label className="inputLabel">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="input"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="fieldWrap">
                    <label className="inputLabel">Last name</label>
                    <input
                       type="text"
                       name="lastName"
                       className="input"
                       value={this.state.lastName}
                       onChange={this.handleChange}
                    />
                </div>
                <div className="fieldWrap">
                    <label className="inputLabel">Phone</label>
                    <input
                       type="text"
                       name="phone"
                       className="input"
                       value={this.state.phone}
                       onChange={this.handleChange}
                    />
                </div>
                <div className={styles.formButtons}>
                    <button
                        type="submit"
                        className="button button--blue"
                    >
                        Submit
                    </button>
                    <button
                        className={`${styles.buttonCancel} button`}
                        onClick={this.onShowContacts}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        )
    }
}

export default ContactForm;