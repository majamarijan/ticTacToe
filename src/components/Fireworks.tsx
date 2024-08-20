import { Fragment } from "react";


export default function Fireworks() {
  const arr =new Array(20 + Math.floor(Math.random()*20)).fill(1);
  return (
    <div className='fireworkWrapper'>
      {arr.map((i, index)=> {
        return (
          <Fragment key={index + i}>
            <div className="firework"></div>
          </Fragment>
        )
      })}
    </div>
  )
}