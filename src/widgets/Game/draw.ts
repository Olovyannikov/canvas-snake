import {Position} from "./useSnakeGame.ts";

interface Draw {
    ctx: CanvasRenderingContext2D;
    body: Position[];
}

const SEGMENT_SIZE = 5;

export const draw = ({ctx, body}: Draw) => {
    ctx.fillStyle = 'rgb(200, 0, 0)';
    body?.forEach(segment => ctx.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE))
}