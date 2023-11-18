import {useRef} from "react";
import {Canvas} from "../entities/Canvas";
import {draw} from "./draw.ts";
import s from './Game.module.scss';
import {useSnakeGame} from "./useSnakeGame.ts";

export const Game = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const {snakeBody} = useSnakeGame();
    const onDrawHandler = (ctx: CanvasRenderingContext2D) => draw({ctx, body: snakeBody})

    return (
        <div className={s.root}>
            <Canvas ref={canvasRef} draw={onDrawHandler} />
        </div>
    )
}