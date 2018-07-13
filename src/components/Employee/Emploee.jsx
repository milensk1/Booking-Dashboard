import React, { Component } from "react";
import styles from './Employee.module.scss'

export class Employee extends Component {
    render() {
        const name = this.props.name;
        const avatar = this.props.avatar;
        const hours = this.props.hours;

        return (
            <div className={styles.col}>
                <div className={styles.stat}>
                    <img src={avatar} alt="avatar" ></img>
                </div>
                <div className={styles.stat}>
                    <p className={styles.name}>{name}</p>
                </div>
                <div className={styles.stat}>
                    <p>{hours} hours</p>
                </div>
            </div>
        );
    }
}