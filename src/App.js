import './App.css';
import { FaHandPaper, FaHandRock, FaHandScissors } from 'react-icons/fa';
import { imgs } from './images';

function random() {
  
}

function Player() {
  return ( 
    <div className="player">
      <div>You: 0</div>
      <div>
        <img src={ imgs.rock.src } alt={ imgs.paper.title } />
        </div>
    </div>  
  )
}

function Bot() {
  return (
    <div className="player">
      <div>Bot: 0</div>
      <div>
          <img src={ imgs.botPaper.src } alt={ imgs.botPaper.title } />
      </div>
    </div>
  )   
}

function App() {
  return (
    <div className="App">
      <h1>Let's Play</h1>
      <div>
        <div className="container">
          <Player /> 
          <Bot />
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
