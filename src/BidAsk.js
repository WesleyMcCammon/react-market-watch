import React, { useEffect } from 'react';

const BidAsk = (props) => {

    return (
        <div style={{ display: 'grid', gridColumn: '1 / span 3', gridTemplateColumns: '7fr 12fr', marginBottom: '5px', paddingBottom: '7px' }}>
            <div style={{ fontSize: '1.2em' }}>{props.instrument}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', fontSize: '.7em', marginTop: '4px', color: '#ababab' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                    <div>bid&nbsp;</div>
                    <div>4100.25</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                    <div>ask&nbsp;</div>
                    <div>4100.25</div>
                </div>
                <div style={{ textAlign: 'right', marginRight: '4px' }}>+ 1.34%</div>
            </div>
        </div>
    )
}
export default BidAsk;