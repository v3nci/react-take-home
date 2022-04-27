import BallotContextProvider from "contexts/ballot-context/ballot-context";
import Ballot from './containers/ballot/ballot';

function App() {
  return (
    <div className="App">
      <BallotContextProvider>
        <Ballot />
      </BallotContextProvider>
    </div>
  );
}

export default App;
