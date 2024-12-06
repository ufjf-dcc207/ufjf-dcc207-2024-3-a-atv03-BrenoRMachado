import './App.css'
import Animal from './Animal'
import Exibicao from './Exibicao';

function App() {
  return (
    <div className ="app">
      <Exibicao 
      abertura={new Date("2024-12-06T08:00:00.000-03:00")} 
      fechamento={new Date("2024-12-06T12:00-03:00")} 
      cercado="A1">
      <Animal icone='🦁' nome='Leão' peso={-1} extincao/>
      <Animal icone='🦒' nome='Girafa' peso={1200} extincao/>
      </Exibicao>
      
      <Exibicao
      abertura={new Date("2024-12-06T13:00:00.000-03:00")} 
      fechamento={new Date("2024-12-06T17:00-03:00")} 
      cercado="B1">
      <Animal icone='🦜' nome='Paraguaio' peso={0.12} />
      </Exibicao>
    </div>
  );
}

export default App