import React, { Component } from 'react'
// import finnhub from 'finnhub'
const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c9t89iaad3i1pjtugfv0"
const finnhubClient = new finnhub.DefaultApi()

function getPrice(ticker) {
    finnhubClient.quote(ticker, (error, data, response) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(ticker, data.c);
        }
    });
}

class StockCard extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.stock.ticker}</h3>
                <p>Precio: {this.props.stock.price}</p>
                <p> { getPrice(this.props.stock.ticker) } </p>
            </div>
        )
    }
}

export default StockCard
