import React from 'react';

const EMA = () => {
    return (
        <div style={{ display: 'grid', gridColumn: '1 / span 4', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', paddingTop: '4px', paddingBottom: '7px', color: '#454545' }}>
            <div style={{ fontVariant: 'small-caps', display: 'grid', gridColumn: '1 / span 8', color: 'steelblue', marginLeft: '2px', marginBottom: '3px', fontSize: '.9em' }}>5/8/13 ema</div>
            <div style={{ fontSize: '.8em', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>
                <div>4H</div>
                <div>Neutral</div>
            </div>
            <div style={{ fontSize: '.8em', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>
                <div>1H</div>
                <div>Bearish 4x</div>
            </div>
            <div style={{ fontSize: '.8em', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>
                <div>30M</div>
                <div>Bearish 4x</div>
            </div>
            <div style={{ fontSize: '.8em', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>
                <div>15M</div>
                <div>Bearish 4x</div>
            </div>
            <div style={{ fontSize: '.8em', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>
                <div>5M</div>
                <div>Bearish 4x</div>
            </div>
            <div style={{ fontSize: '.8em', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>
                <div>1M</div>
                <div>Bearish 4x</div>
            </div>
        </div>
    )
};

export default EMA;