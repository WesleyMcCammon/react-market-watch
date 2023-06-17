import React from 'react';

const PriceChip = (props) => {

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: 'solid 1px #343434', color: '#454545', borderRadius: '4px', margin: '2px', padding: '4px' }}>
            <div style={{ fontSize: '.9em', position: 'relative', top: '3px', left: '3px;', marginTop: '3px', marginLeft: '6px' }}>
                {props.name}
            </div>
            <div>
                <div style={{ fontSize: '.8em', textAlign: 'right', marginRight: '4px' }}>{props.difference}</div>
                <div style={{ fontSize: '.8em', textAlign: 'right', marginRight: '4px' }}>{props.value}</div>
            </div>
        </div>
    )
};

export default PriceChip;