import React, { useState, useEffect } from 'react';

//API
import { getCoin } from '../services/api';

//Components
import Coin from './Coin';

const Landing = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data);
        }
        fetchAPI();
    }, [])

    return (
        <div>
            {
                coins.map(coin => <Coin 
                                        key={coin.id}
                                        name={coin.name}
                                        image={coin.image}
                                        symbol={coin.symbol}
                                        price={coin.current_price}
                                        marketCap={coin.market_cap}
                                        priceChange={coin.price_change_percentage_24h}
                                    />)
            }
        </div>
    );
};

export default Landing;