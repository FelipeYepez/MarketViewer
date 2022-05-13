import React, { Component, useEffect, useState } from 'react'
import StockCard from './StockCard'
import Axios from 'axios'

function CriptoList () {
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);


    useEffect(() => {
        Axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=10').then((res) => {
          setCrypto(res.data.coins);
        });
        console.log(crypto);
      }, []);
    return (
            <div>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                    setSearch(e.target.value);
                    }}
                />
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                         })
                    .map((val, id) => {
                        return (
                        <div className='col s12 m4 l3'>
                            <div className="col s12 m12 l12 card card-panel hoverable z-depth-3 blue-grey darken-1">
                                <h3 className="col s5 m5 l5 flow-text lime-text text-darken-1"> { val.symbol } </h3>
                                <h3 className="col s7 m7 l7 flow-text">${ val.price.toFixed(2) } </h3>
                                <p> Available Supply: { val.availableSupply  } Volume(24hrs): { val.volume.toFixed(0) }  </p>
                            </div>
                        </div>
                        );
                    })}
            </div>
        )
    
}

export default CriptoList
