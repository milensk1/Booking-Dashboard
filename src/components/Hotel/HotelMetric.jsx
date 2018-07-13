import React, { Component } from "react";
import styles from './HotelMetric.module.scss';

export class HotelMetric extends Component {
    render() {
        const value = this.props.value;
        let description;
        switch (this.props.description) {
            case "availableRooms":
                description = "Rooms available";
                break;
            case "reservedRooms":
                description = "Reserved rooms";
                break;
            case "checkedIn":
                description = "Checked in";
                break;
        }

        return (
            <div className={styles.col}>
                <h1 className={styles.num}>{value}</h1>
                <h3 className={styles.description}>{description}</h3>
            </div>
        );
    }
}