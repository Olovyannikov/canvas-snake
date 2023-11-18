import {Position} from "./useSnakeGame.ts";

interface Draw {
    ctx: CanvasRenderingContext2D;
    body?: Position[];
    food?: Position;
}

export const SEGMENT_SIZE = 5;

export const draw = ({ctx, body, food}: Draw) => {
    if (food) {
        ctx.fillStyle = 'rgb(0, 200, 0)';
        ctx.fillRect(food.x, food.y, SEGMENT_SIZE, SEGMENT_SIZE);
    }

    ctx.fillStyle = 'rgb(200, 0, 0)';
    body?.forEach(segment => ctx.fillRect(segment.x, segment.y, SEGMENT_SIZE, SEGMENT_SIZE))
}