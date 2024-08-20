import { FieldType } from "../data";

type Props = {
  onClick: (val:number, isActive:boolean)=> void;
  winner: string;
  winningFields: number[] | undefined;
} & FieldType;

export default function Field({id, value, isActive, onClick, winner,winningFields}:Props) {
  return (
     <button className={`field ${winningFields?.map(f=> f === id ? 'win': '').join('')}`} disabled={winner ? true : false} style={{background: `${isActive ? `linear-gradient(rgb(8 54 77), rgb(237 10 132))`: ''}`}} onClick={()=> onClick(id, isActive)}>
      {value}
    </button>
  )
}