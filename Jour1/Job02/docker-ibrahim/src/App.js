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
          background: 'linear-gradient(45deg,rgb(19, 247, 247),rgb(55, 235, 19))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '3em'
        }}>
          Welcome Mr.Erreur
        </h1>
        <p style={{ 
          marginTop: "10px", 
          marginBottom: "50px",
          color: '(rgba(229, 255, 0, 0.99))',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
          Les romans asiatiques sont surcôtés.
        </p>
      </header>
    </div>
  );
};

export default App;
