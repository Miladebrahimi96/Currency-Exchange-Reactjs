import React, { useState, useEffect } from 'react';

//API
import { getCoin } from '../services/api';

//Components
import Coin from './Coin';
import Loading from './Loading';

const Landing = () => {

    const [coins, setCoins] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            setCoins(data);
        }
        fetchAPI();
    }, [])

    //search input
    const searchHandler = event => setSearch(event.target.value);
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <input type='text' value={search} onChange={searchHandler}/>
            {
                coins.length ?

                    <div>
                        {
                            searchCoins.map(coin => <Coin 
                                                    key={coin.id}
                                                    name={coin.name}
                                                    image={coin.image}
                                                    symbol={coin.symbol}
                                                    price={coin.current_price}
                                                    marketCap={coin.market_cap}
                                                    priceChange={coin.price_change_percentage_24h}
                                                />)
                        }
                    </div> : 
                    <Loading />
            }
        </div>
    );
};

export default Landing;