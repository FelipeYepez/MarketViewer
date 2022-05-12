import React, { Component } from 'react'
import StockCard from './StockCard'

class StockList extends Component {
    static defaultProps = {
        stockList: [
            { ticker: "MSFT", price: 266.04 },
            { ticker: "FB", price: 198.88 },
            { ticker: "ABT", price: 108.46 },
            { ticker: "WMT", price: 152.68 },
            { ticker: "KO", price: 65.11 },
            { ticker: "NFLX", price: 174.33 }
        ]
    }
    render() {
        const stockList = this.props.stockList;
        let cards = [];
        for (let i = 0; i < stockList.length; i++) {
            let card = <StockCard stock = { stockList[i] }/>;
            cards.push(card);
        }
        return (
            <div>
                {cards}
            </div>
        )
    }
}

export default StockList
