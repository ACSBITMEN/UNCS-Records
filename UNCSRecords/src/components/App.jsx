import Background from './AnimatedBackground.jsx';
import Tarjet from './Tarjet.jsx';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="container_bg">
        <Background />
      </div>
      <div className="container_main">
        <header>
          <h1>UNCS Records</h1>
        </header>
        <main>
          <Tarjet />
        </main>
        <footer>
          <p>
            Desarrollado por <a href="#">andressuarez.com.co</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
