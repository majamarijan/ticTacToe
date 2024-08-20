import { useEffect, useReducer, useState } from "react";
import { FieldsType, fields, winings } from "../data";
import Field from "./Field";
import { useLoaderData } from "react-router-dom";
import { Mode } from "../routes/game";
import Fireworks from "./Fireworks";
import GameOver from "./GameOver";

type CardsAction = {
  type: string;
  value: number;
};

function reducer(state: FieldsType, action: CardsAction) {
  if (action.type === "reset") {
    return fields;
  } else {
    return state.map((item) => {
      if (action.value === item.id) {
        return { ...item, isActive: true, value: action.type };
      } else {
        return item;
      }
    });
  }
}

type PlayerAction = {
  type: string;
  value: number;
};
type Player = { name: string; values: number[] };

function playerReducer(state: Player[], action: PlayerAction) {
  return state.map((p) => {
    if (p?.name === action.type) {
      return { ...p, values: [...p.values, action.value] };
    } else {
      return p;
    }
  });
}

const _players: Player[] = [
  { name: "player1", values: [] },
  { name: "player2", values: [] },
];

export default function Game() {
  const { autoPlayerMode } = useLoaderData() as Mode;
  const [cards, dispatch] = useReducer(reducer, fields);
  const [players, dispatchPlayers] = useReducer(playerReducer, _players);
  const [playerOrder, setPlayerOrder] = useState<string>("X");
  const [initialOrder, setInitialOrder] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  let time: ReturnType<typeof setTimeout>;
  const player1: Player | undefined = players.find((p) => p.name === "player1");
  const player2: Player | undefined = players.find((p) => p.name === "player2");
  const [winningFields, setWinningFields] = useState<number[]>();
  const calculateAllFields = [...cards].every((x) => x.isActive);

  function calculateWinner() {
    if (
      (player1 && player1.values.length > 0) ||
      (player2 && player2.values.length > 0)
    ) {
      for (var i = 0; i < winings.length; i++) {
        let arr = winings[i];
        const hasWinplayer1 = player1?.values.filter((x) => arr.includes(x));
        const hasWinplayer2 = player2?.values.filter((x) => arr.includes(x));
        if (hasWinplayer1?.length === arr.length) {
          setGameOver(true);
          setWinner("X");
          setWinningFields(arr);
        }
        if (hasWinplayer2?.length === arr.length) {
          setGameOver(true);
          setWinner("O");
          setWinningFields(arr);
        }
      }
    }
  }

  function reloadWinner() {
    setWinner("");
    setWinningFields(undefined);
    dispatch({ type: "reset", value: 0 });
    dispatchPlayers({ type: "player1", value: 0 });
    dispatchPlayers({ type: "player2", value: 0 });
  }

  useEffect(() => {
    if (player1 || player2) {
      if(calculateAllFields) {
        setGameOver(true);
        setWinner("Draw");
      }
      calculateWinner();
    }
  }, [players, cards]);

  

  function handleAutoplayer() {
    const freeFields = cards.filter((x) => !x.isActive);
    const field = freeFields[Math.floor(Math.random() * freeFields.length)];
    setPlayerOrder("O");
    dispatch({ type: "O", value: field.id });
    dispatchPlayers({ type: "player2", value: field.id });
  }

  useEffect(() => {
    if (autoPlayerMode) {
      if (!winner) {
        if (playerOrder === "X" && initialOrder) {
          time = window.setTimeout(handleAutoplayer, 400);
        }
      }

      return () => clearTimeout(time);
    }
  }, [winner, playerOrder, autoPlayerMode, initialOrder]);

  function fieldHandler(val: number, isActive: boolean) {
    if (isActive) {
      return;
    }
    if (autoPlayerMode) {
      setInitialOrder(true);
      setPlayerOrder("X");
      dispatch({ type: "X", value: val });
      dispatchPlayers({ type: "player1", value: val });
    } else {
      if (playerOrder === "X") {
        dispatchPlayers({ type: "player1", value: val });
      } else {
        dispatchPlayers({ type: "player2", value: val });
      }
      setPlayerOrder((prev) => {
        if (prev === "X") {
          return "O";
        } else {
          return "X";
        }
      });
      dispatch({ type: playerOrder, value: val });
    }
  }

  return (
    <div className='boardWrapper'>
      {gameOver && (
        <>
          <GameOver winner={winner} reloadWinner={reloadWinner} />
          <Fireworks />
        </>
      )}
      <div className={`board ${gameOver && "blur"}`}>
        {cards.map((card) => {
          return (
            <Field
              key={card.id}
              {...card}
              onClick={fieldHandler}
              winner={winner}
              winningFields={winningFields}
            />
          );
        })}
      </div>
    </div>
  );
}
