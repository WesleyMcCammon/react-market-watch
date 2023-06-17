import logo from './logo.svg';
import './App.css';
import MarketWatch from './MarketWatch';

function App() {
  const data = [
    { instrument: 'EUR/USD' },
    { instrument: 'EUR/GBP' },
    { instrument: 'USD/JPY' },
    { instrument: 'GBP/USD' },
    { instrument: 'GBP/EUR' },
    { instrument: 'AUD/USD' },
    { instrument: 'CHF/USD' },
    { instrument: 'NZD/USD' },
    { instrument: 'GBP/ABC' }
  ];

  return (
    <div className="App">
      <MarketWatch data={data}></MarketWatch>
    </div>
  );
}

export default App;
