import React from "react";
import { Bars } from  'react-loader-spinner'
import styles from './Spinner.module.css'

class Spinner extends React.Component {

    render() {
        const {height, width, color} = this.props;

        return (
            <div className={styles.spinnerWrap}>
                <Bars heigth={height} width={width} color={color} ariaLabel="loading-indicator" />
            </div>
        )
    }
}

export default Spinner;
