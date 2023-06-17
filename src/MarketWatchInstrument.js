import React from 'react';
import BidAsk from './BidAsk';
import PriceLevel from './PriceLevel';

const MarketWatchInstrument = (props) => {

    const styles = {
        bullBearFlags: {
            fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px'
        }
    }

    const priceLevel1 = {
        name: 'pivots',
        levels: [
            { name: 'R3', value: 4125.25, difference: 124.43 },
            { name: 'R2', value: 4125.25, difference: 124.43 },
            { name: 'R1', value: 4125.25, difference: 124.43 }
        ]
    };

    const priceLevel2 = {
        name: 'prev day hi-lo',
        levels: [
            { name: 'Hi', value: 4125.25, difference: 124.43 },
            { name: 'Lo', value: 4125.25, difference: 124.43 }
        ]
    }

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', border: 'solid 1px #323232', padding: '14px', margin: '2px 12px 2px 0px' }}>
            <div style={{ display: 'grid', gridColumn: '1 / span 4', gridTemplateColumns: '3fr 7fr', marginBottom: '5px', paddingBottom: '7px' }}>
                <div>{props.instrument}</div>
                <BidAsk></BidAsk>
            </div>
            <div style={{ borderTop: 'solid 1px #232323', display: 'grid', gridColumn: '1 / span 4', gridTemplateColumns: '5fr 5fr 5fr 5fr 5fr 5fr 5fr', paddingTop: '4px', paddingBottom: '7px', color: '#454545' }}>
                <div style={{ fontVariant: 'small-caps', display: 'grid', gridColumn: '1 / span 8', color: 'steelblue', marginBottom: '3px', fontSize: '.9em' }}>bull/bear flags</div>
                <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>Day</div>
                <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>240</div>
                <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>60</div>
                <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>30</div>
                <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>15</div>
                <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>5</div>
                <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>1</div>
                <div>&nbsp;</div>
            </div>
            <PriceLevel priceLevel={priceLevel1}></PriceLevel>
            <PriceLevel priceLevel={priceLevel2}></PriceLevel>
            <PriceLevel priceLevel={priceLevel1}></PriceLevel>
        </div>
    )
};

export default MarketWatchInstrument;