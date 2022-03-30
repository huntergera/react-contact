import React from "react";
import styles from "./ContactForm.module.css"
import {Link} from "react-router-dom";

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
            ...this.props.currentItem,
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
        this.props.handleFormSubmit(this.state);
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
                        onChange={this.handleChange}/>
                </div>
                <div className="fieldWrap">
                    <label className="inputLabel">Last name</label>
                    <input type="text"
                           name="lastName"
                           className="input"
                           value={this.state.lastName}
                           onChange={this.handleChange}/>
                </div>
                <div className="fieldWrap">
                    <label className="inputLabel">Phone</label>
                    <input type="text"
                           name="phone"
                           className="input"
                           value={this.state.phone}
                           onChange={this.handleChange}/>
                </div>
                <div className={styles.formButtons}>
                    <Link to='/'>
                        <button type="submit" className="button button--blue" onClick={this.onAddContact}>Submit</button>
                    </Link>
                    <Link to='/'>
                        <button className={`${styles.buttonCancel} button`}>Cancel</button>
                    </Link>
                </div>
            </form>
        )
    }
}

export default ContactForm;
