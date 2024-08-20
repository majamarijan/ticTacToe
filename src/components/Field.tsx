import { FieldType } from "../data";

type Props = {
  onClick: (val:number, isActive:boolean)=> void;
  winner: string;
  winningFields: number[] | undefined;
} & FieldType;

export default function Field({id, value, isActive, onClick, winner,winningFields}:Props) {
  return (
     <button className={`field ${winningFields?.map(f=> f === id ? 'win': '').join('')}`} disabled={winner ? true : false} style={{background: `${isActive ? `linear-gradient(red, black)`: ''}`}} onClick={()=> onClick(id, isActive)}>
      {value}
    </button>
  )
}