import logo from './logo.svg';
import './App.css';

const App = () => { // замість function *назва* {}, const *назва* = () => {}

  const header = 'Polina Zabrudska';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <code>{header}</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
