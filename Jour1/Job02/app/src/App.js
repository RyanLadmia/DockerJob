import "./App.css";
import Confetti from "./Confetti";

const App = () => {
  return (
    <div className="App" style={{ 
      backgroundColor: 'black',
      minHeight: '100vh',
      width: '100%'
    }}>
      <Confetti />
      <header className="App-header">
        <h1 style={{ 
          marginBottom: "0px",
          background: 'linear-gradient(45deg, #ff0000, #800000)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '3em'
        }}>
          Welcome Mr.Erreur
        </h1>
        <p style={{ 
          marginTop: "10px", 
          marginBottom: "50px",
          color: '#ff3333',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
          ta 18 ans le temp passe vite 
        </p>
      </header>
    </div>
  );
};

export default App;
