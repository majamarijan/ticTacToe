import { ActionFunctionArgs } from "react-router-dom";

export async function loader({params}: ActionFunctionArgs) {
  if(params.mode === 'normal') {
    return {autoPlayerMode: false}
  }else {
    return {autoPlayerMode:true}
  }
}

export type Mode = {
  autoPlayerMode: boolean
}

