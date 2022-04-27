import { useEffect  } from 'react';
import './App.css';
import Ballot from './containers/ballot/ballot';
import api from './api/Api';

function App() {
  // Feel free to remove the contents of the header tag to make more room for your code

  useEffect(() => {
    const fetchData = async () => {
      const response =  await api.getBallotData();

      console.log(response)
    }

    fetchData()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://www.dailypay.com/wp-content/uploads/DailyPay-Logo-White.svg'} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Ballot />
    </div>
  );
}

export default App;
