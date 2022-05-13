import React, { Component } from 'react'
// import finnhub from 'finnhub'
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c9t89iaad3i1pjtugfv0"
const finnhubClient = new finnhub.DefaultApi()

class StockCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            actualPrice: 0,
            percentChange: 0,
            change: 0,
            high: 0,
            low: 0
        }
    }

    componentDidMount() {
        finnhubClient.quote(this.props.stock.ticker, (error, data, response) => {
            if (error) {
                this.setState( {
                    error: error.message
                })
            }
            else {
                this.setState({ 
                    actualPrice: (data.c).toFixed(2),
                    percentChange: (data.dp).toFixed(2),
                    change: (data.d).toFixed(2),
                    high: (data.h).toFixed(2),
                    low: (data.l).toFixed(2)
                });
            }
        });
    }

    render() {
        return (
            <div className='col s12 m4 l3'>
                <div className="col s12 m12 l12 card card-panel hoverable z-depth-3 blue-grey darken-1">
                    <h3 className="col s5 m5 l5 flow-text lime-text text-darken-1"> { this.props.stock.ticker } </h3>
                    <h3 className="col s7 m7 l7 flow-text">${ this.state.actualPrice } </h3>
                    <h5 className="col s6 m6 l6 flow-text"> { this.state.percentChange }% </h5>
                    <h5 className="col s6 m6 l6 flow-text"> $({ this.state.change }) </h5>
                    <p> Low: { this.state.low  } High: { this.state.high }  </p>
                    <p className="red-text text-darken-3"> { this.state.error } </p>
                </div>
            </div>
        )
    }
}

export default StockCard
