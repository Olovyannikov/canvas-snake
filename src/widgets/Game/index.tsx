import {useRef} from "react";
import {Canvas} from "../entities/Canvas";
import {draw} from "./draw.ts";
import s from './Game.module.scss';
import {useSnakeGame} from "./useSnakeGame.ts";

export const Game = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const {snakeBody, onSnakeMove} = useSnakeGame();
    const onDrawHandler = (ctx: CanvasRenderingContext2D) => draw({ctx, body: snakeBody})

    return (
        <div tabIndex={0} className={s.root} onKeyDown={onSnakeMove}>
            <Canvas ref={canvasRef} draw={onDrawHandler} />
        </div>
    )
}