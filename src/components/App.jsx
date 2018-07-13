import React, { Component } from "react";
import styles from './App.module.scss';

import { HotelStat } from "./HotelStat/HotelStat";
import { EmployeeStat } from "./EployeeStat/EmployeeStat";

export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <div className="page-content">
                    <HotelStat></HotelStat>
                    <br/>
                    <hr/>
                    <EmployeeStat></EmployeeStat>
                </div>
            </div>
        );
    }
}
