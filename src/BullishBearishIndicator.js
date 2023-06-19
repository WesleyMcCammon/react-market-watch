import React from 'react';

const BullishBearishIndicator = (props) => {
    return (
        <div style={{ borderTop: 'solid 1px #232323', display: 'grid', gridColumn: '1 / span 4', gridTemplateColumns: '5fr 5fr 5fr 5fr 5fr 5fr 5fr', paddingTop: '4px', paddingBottom: '7px', color: '#454545' }}>
            <div style={{ fontVariant: 'small-caps', display: 'grid', gridColumn: '1 / span 8', color: 'steelblue', marginBottom: '3px', fontSize: '.9em' }}>bull/bear flags</div>
            <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>Day</div>
            <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>240</div>
            <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>60</div>
            <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>30</div>
            <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>15</div>
            <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>5</div>
            <div style={{ fontSize: '.8em', width: '35px', borderRadius: '3px', border: 'solid 1px #343434', padding: '5px', textAlign: 'center', marginRight: '2px' }}>1</div>
        </div>
    )
};

export default BullishBearishIndicator;