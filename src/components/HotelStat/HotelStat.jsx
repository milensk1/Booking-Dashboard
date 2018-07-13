import React, { Component } from "react";

import { HotelMetric } from "../Hotel/HotelMetric";
import { GetHotelStats } from '../Helper';

export class HotelStat extends Component {
    constructor(props) {
        super(props);
        this.renderStats = this.renderStats.bind(this);

        this.state = { hotelStats: {}, loading: true };
    }

    componentDidMount() {
        GetHotelStats()
            .then(result => {
                const hotelStats = result;
                this.setState({ hotelStats, loading: false })
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderStats() {
        let result = [];
        for (const stat in this.state.hotelStats) {
            result.push(<HotelMetric 
                value={this.state.hotelStats[stat]}
                description={stat} />)
        }
        return (result);
    }

    render() {
        const content = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderStats();

        return (
            <div className="row" >
                {content}
            </div>
        );
    }
}
