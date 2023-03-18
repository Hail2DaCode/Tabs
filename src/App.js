import './App.css';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs items = 
      { 
        [
          {label: "Tyrion Lannister", content: "Dwarf born in Casterly Rock who loves to read."}, 
          {label: "Bran Stark", content: "Son of Ned Stark and brother to Robert Stark. He loves to climb and his pet direwolf!"}, 
          {label: "Brienne Tarth", content: "A princess of Tarth that wants to be a knight!"}
        ] } />
    </div>
  );
}

export default App;
