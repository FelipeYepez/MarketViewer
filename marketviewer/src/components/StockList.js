import React, { Component } from 'react'
import StockCard from './StockCard'

class StockList extends Component {
    static defaultProps = {
        stockList: [
            { ticker: "MSFT" },
            { ticker: "FB" },
            { ticker: "ABT" },
            { ticker: "WMT" },
            { ticker: "KO" },
            { ticker: "NFLX" },
            { ticker: "NVDA" },
            { ticker: "TSLA" },
            { ticker: "SPCE" },
            { ticker: "AAPL" },
            { ticker: "RCL" },
            { ticker: "NIO" },
            { ticker: "BABA" },
            { ticker: "DPZ" }
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
