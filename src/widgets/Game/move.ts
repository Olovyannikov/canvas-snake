import {Position} from "./useSnakeGame.ts";

export const createSnakeMove = (gridSize = 5) => ({
    moveUp: (snake: Position[]) => {
        const body = [...snake];
        const head = body[body.length - 1];

        body.shift()

        return [...body, {...head, y: head.y - gridSize}]
    },
    moveDown: (snake: Position[]) => {
        const body = [...snake];
        const head = body[body.length - 1];

        body.shift()

        return [...body, {...head, y: head.y + gridSize}]
    },
    moveLeft: (snake: Position[]) => {
        const body = [...snake];
        const head = body[body.length - 1];

        body.shift()

        return [...body, {...head, x: head.x - gridSize}]
    },
    moveRight: (snake: Position[]) => {
        const body = [...snake];
        const head = body[body.length - 1];

        body.shift()

        return [...body, {...head, x: head.x + gridSize}]
    },
})