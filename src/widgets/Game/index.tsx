import {Canvas} from "../entities/Canvas";
import s from './Game.module.scss';

export const Game = () => {
    const draw = (ctx: CanvasRenderingContext2D) => {}

    return (
        <div className={s.root}>
            <Canvas draw={draw} />
        </div>
    )
}