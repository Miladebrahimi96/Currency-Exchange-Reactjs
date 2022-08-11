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
            
        </div>
    );
};

export default Landing;