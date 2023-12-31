import React from 'react';
import BidAsk from './BidAsk';
import PriceLevel from './PriceLevel';
import BullishBearishIndicator from './BullishBearishIndicator';
import EMA from './EMA';

const MarketWatchInstrument = (props) => {
    const priceLevel1 = {
        name: 'pivots',
        levels: [
            { name: 'R3', value: 4125.25, difference: 124.43 },
            { name: 'R2', value: 4125.25, difference: 124.43 },
            { name: 'R1', value: 4125.25, difference: 124.43 },
            { name: 'S1', value: 4125.25, difference: 124.43 }
        ]
    };

    const priceLevel2 = {
        name: 'prev day hi-lo',
        levels: [
            { name: 'Hi', value: 4125.25, difference: 124.43 },
            { name: 'Lo', value: 4125.25, difference: 124.43 }
        ]
    }
    const priceLevel3 = {
        name: 'order flow',
        levels: [
            { name: 'VWAP', value: 4125.25, difference: 124.43 },
            { name: 'Dev +.5', value: 4125.25, difference: 124.43 },
            { name: 'Dev -.5', value: 4125.25, difference: 124.43 }
        ]
    }
    const priceLevel4 = {
        name: 'value area',
        levels: [
            { name: 'VA High', value: 4125.25, difference: 124.43 },
            { name: 'VA Low', value: 4125.25, difference: 124.43 }
        ]
    };

    return (

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', border: 'solid 1px #323232', padding: '14px', margin: '2px 12px 2px 0px' }}>
            <div style={{ display: 'grid', gridColumn: '1 / span 4' }}>
                <BidAsk instrument={props.instrument}></BidAsk>
            </div>
            {/* <BullishBearishIndicator instrument={props.instrument}></BullishBearishIndicator> */}
            <PriceLevel priceLevel={priceLevel1}></PriceLevel>
            <PriceLevel priceLevel={priceLevel2}></PriceLevel>
            <PriceLevel priceLevel={priceLevel3}></PriceLevel>
            <PriceLevel priceLevel={priceLevel4}></PriceLevel>
            <EMA></EMA>
        </div>
    )
};

export default MarketWatchInstrument;