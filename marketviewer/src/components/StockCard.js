import React, { Component } from 'react'

class StockCard extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.stock.ticker}</h3>
                <p>Precio: {this.props.stock.price}</p>
            </div>
        )
    }
}

export default StockCard
