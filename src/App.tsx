import './App.css'
import Animal from './Animal'

function App() {
  return (
    <div className ="app">
      <Animal icone='🦁' nome='Leão' peso={-1} extincao = {true}/>
    </div>
  );
}

export default App