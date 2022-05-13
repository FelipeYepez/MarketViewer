import StockList from './StockList';
import CriptoList from './CriptoList';
import { useState } from 'react';

function Tabs() {
    const tabList = [{ label: "Acciones", content: <StockList/> },
                { label: "Criptomonedas", content: <CriptoList/> }];
    const [active, setActive] = useState(tabList[0].content);

    return(
        <div class="row">
            <div class="col s12">
                <ul class="tabs">
                {
                    tabList.map(tab => (
                        <li 
                            active={ active === tab.content }
                            class="tab col s6 blue-grey darken-4"
                            onClick={() => setActive(tab.content)}>
                                <a 
                                    class="active lime-text text-darken-2">
                                        {tab.label}
                                </a>
                        </li>
                    ))
                }
                </ul>
            </div>
            <div class="blue-grey darken-3">
                <div class="container row">
                    {active}
                </div>
            </div>
        </div>
    )
}

export default Tabs