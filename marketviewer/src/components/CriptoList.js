import React, { Component } from 'react'
import StockCard from './StockCard'

class CriptoList extends Component {
    static defaultProps = {
        criptoList: [
            { ticker: "BTC" },
            { ticker: "ETH" },
            { ticker: "ADA" },
            { ticker: "XRP" },
            { ticker: "APE" },
            { ticker: "SOL" }
        ]
    }
    render() {
        const criptoList = this.props.criptoList;
        let cards = [];
        for (let i = 0; i < criptoList.length; i++) {
            let card = <StockCard stock = { criptoList[i] }/>;
            cards.push(card);
        }
        return (
            <div>
                {cards}
            </div>
        )
    }
}

export default CriptoList
