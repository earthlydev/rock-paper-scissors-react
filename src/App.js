import './App.css';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <h1>Let's Play</h1>
      <div>
        <div className="container">
          <div className="player">
            <div>You: 0</div>
            <div></div>
          </div>
          <div className="player">
            <div>Bot: 0</div>
            <div></div>
          </div>
        </div>
        <div>
          <button className="btn">
            <FaHandRock size={35}/>
          </button>
          <button className="btn">
            <FaHandPaper size={35}/>
          </button>
          <button className="btn">
            <FaHandScissors size={35}/>
          </button>
        </div>
        <div className="container-2">
          <h2>Player 1 Wins</h2>
          <h3>Play Again?</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
