import React, { useState, useEffect } from 'react';
import MarketWatchInstrument from './MarketWatchInstrument';

const MarketWatch = (props) => {
    const [message, setMessage] = useState('');

    console.log('reload');

    useEffect(() => {
        const start = () => {
            const events = new EventSource('http://localhost:3700/events', { withCredentials: false });
            events.onmessage = (event) => {
                const formatted = event.data.replaceAll('\"', '');
                setMessage(formatted);
            }
        };
        start();
    }, [setMessage]);

    const marketWatchInstruments = [...props.data];


    return (
        <div style={{ display: 'grid', gridTemplateColumns: '75fr 25fr' }}>
            <div style={{ textAlign: 'left', padding: '4px' }}>
                <div style={{ fontSize: '1.2em', padding: '0px' }}>Market Watch</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '4px', margin: '4px' }}>
                    {marketWatchInstruments.map((i) => (
                        <MarketWatchInstrument key={i.instrument} instrument={i.instrument}></MarketWatchInstrument>
                    ))}
                </div>
            </div>
            <div style={{ textAlign: 'left', padding: '4px' }}>
                <div style={{ fontSize: '1.2em', padding: '0px' }}>Alerts</div>
            </div>
        </div>
    )
};

export default MarketWatch;