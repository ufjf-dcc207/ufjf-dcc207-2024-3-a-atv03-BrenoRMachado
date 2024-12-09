type ExibicaotuplaType = [string, string, string, AnimaisTupleType[]]
type AnimaisTupleType = [string, string, number,boolean]
const EXIBICOES: ExibicaotuplaType[] = [
    [
        "A1",
        "2024-12-06T08:00:00.000-03:00" ,
        "2024-12-06T12:00-03:00",
        [
        ["🦁","Leão",190.0,  true],
        ["🦜","Paraguaio",0.12, false],
        ],
      ],
      [
        "B2", 
        "2024-12-06T13:00:00.000-03:00", 
        "2024-12-06T17:00-03:00",
        [
        ["🦒","Girafa",1200, true],
        ["🐖","Porco" ,360, true],
        ],
      ],
];

export default EXIBICOES;