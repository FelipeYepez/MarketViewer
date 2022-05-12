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
            actualPrice: 0
        }
    }

    componentDidMount() {
        finnhubClient.quote(this.props.stock.ticker, (error, data, response) => {
            if (error) {
                console.log(error);
            }
            else {
                this.setState({ 
                    actualPrice: data.c
                });
            }
        });
    }

    render() {
        return (
            <div>
                <h3>{this.props.stock.ticker}</h3>
                <p>Precio: {this.state.actualPrice} </p>
            </div>
        )
    }
}

export default StockCard
