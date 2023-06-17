import React from 'react';
import PriceChip from './PriceChip';

const PriceLevel = (props) => {

    return (
        <div>
            <div style={{ fontVariant: 'small-caps', color: 'steelblue', textAlign: 'center', fontSize: '.9em' }}>{props.priceLevel.name}</div>
            {props.priceLevel.levels.map((i) => (
                <PriceChip name={i.name} value={i.value} difference={i.difference} ></PriceChip>
            ))}
        </div>
    )
};

export default PriceLevel;