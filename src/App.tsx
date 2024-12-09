import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";
import { ReactNode } from "react";

type AnimaisTupleType = [string, string, number,boolean]
const ANIMAIS: AnimaisTupleType[] = [
    ["🦁","Leão",190.0,  true],
    ["🦒","Girafa",1200, true],
    ["🦜","Paraguaio",0.12, false],
    ["🐖","Porco" ,360, true],
];

function App() {
  const exA1: ReactNode[] = [];
  const exB2: ReactNode[] = ANIMAIS.map( animal => <Animal 
    key={animal[1]}
    icone={animal[0]} 
    nome={animal[1]} 
    peso={animal[2]} 
    extincao={animal[3]} 
  />
  );

  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-12-06T08:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T12:00-03:00")}
        cercado="A1"
      >
        {exA1}
      </Exibicao>

      <Exibicao
        abertura={new Date("2024-12-06T13:00:00.000-03:00")}
        fechamento={new Date("2024-12-06T17:00-03:00")}
        cercado="B1"
      >
        {exB2}
      </Exibicao>
    </div>
  );
}

export default App;
