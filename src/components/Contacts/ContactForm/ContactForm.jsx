import React from "react";
import styles from "./ContactForm.module.css"

class ContactForm extends React.Component {
    render() {

        return (
            <form action="">
                <div className="fieldWrap">
                    <label className="inputLabel">First name</label>
                    <input type="text" className="input"/>
                </div>
                <div className="fieldWrap">
                    <label className="inputLabel">Last name</label>
                    <input type="text" className="input"/>
                </div>
                <div className="fieldWrap">
                    <label className="inputLabel">Phone</label>
                    <input type="text" className="input"/>
                </div>
            </form>
        )
    }
}

export default ContactForm;
