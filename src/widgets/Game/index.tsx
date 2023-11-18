import {Canvas} from "../entities/Canvas";

export const Game = () => {
    const draw = (ctx: CanvasRenderingContext2D) => {}

    return (
        <Canvas draw={draw} />
    )
}