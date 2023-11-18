import {useRef, useState} from "react";
import {Canvas} from "../entities/Canvas";
import {draw} from "./draw.ts";
import s from './Game.module.scss';
import {useSnakeGame} from "./useSnakeGame.ts";

export const GAME_STATE = {
    RUNNING: 'RUNNING',
    PAUSED: 'PAUSED',
    GAME_OVER: 'GAME_OVER',
} as const;

export type GameState = keyof typeof GAME_STATE;

export const Game = () => {
    const [gameState, setGameState] = useState<GameState>(GAME_STATE.RUNNING);
    const onGameOver = () => setGameState(GAME_STATE.GAME_OVER);

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const {snakeBody, foodPos, onSnakeMove, resetGameState} = useSnakeGame({
        width: canvasRef?.current?.width,
        height: canvasRef?.current?.height,
        gameState,
        onGameOver,
        setGameState
    });
    const onDrawHandler = (ctx: CanvasRenderingContext2D) => draw({ctx, body: snakeBody, food: foodPos})

    return (
        <div tabIndex={0} className={s.root} onKeyDown={onSnakeMove}>
            <Canvas ref={canvasRef} draw={onDrawHandler}/>
            {gameState === GAME_STATE.GAME_OVER ? (
                <button
                    onClick={() => {
                        setGameState(GAME_STATE.RUNNING);
                        resetGameState();
                    }}
                >
                    Play Again
                </button>
            ) : (
                <button
                    onClick={() => {
                        setGameState(
                            gameState === GAME_STATE.RUNNING
                                ? GAME_STATE.PAUSED
                                : GAME_STATE.RUNNING
                        );
                    }}
                >
                    {gameState === GAME_STATE.RUNNING ? 'pause' : 'play'}
                </button>
            )}
            <output>{`Your score: ${snakeBody ? ((snakeBody?.length) - 1) * 10 : 0} `}</output>
        </div>
    )
}