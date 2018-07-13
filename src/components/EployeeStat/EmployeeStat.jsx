import React, { Component } from "react";
import styles from './EmployeeStat.module.scss';

import { Employee } from '../Employee/Emploee';
import { GetTopEmployees } from '../Helper';

export class EmployeeStat extends Component {
    constructor(props) {
        super(props);
        this.renderTopEmployees = this.renderTopEmployees.bind(this);

        this.state = { topEmployees: [], loading: true };
    }

    componentDidMount() {
        GetTopEmployees()
            .then(result => {
                const topEmployees = result;
                this.setState({ topEmployees, loading: false })
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderTopEmployees() {
        let result = [];
        this.state.topEmployees.forEach(e => {
            const name = `${e.firstName} ${e.lastName.substring(0, 1)}.`;
            result.push(<Employee
                name={name}
                avatar={e.profileImageUrl}
                hours={e.totalHours} />)
        })
        return (result);
    }

    render() {
        const content = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderTopEmployees();

        return (
            <div className="row" >
                <h1 className={styles.statTitle}>Eployee stats</h1>
                <br />
                {content}
            </div>
        );
    }
}