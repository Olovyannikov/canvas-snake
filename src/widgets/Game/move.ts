import {Dir, DIRECTIONS, Position} from "./useSnakeGame.ts";

interface WillSnakeHitTheFood {
    foodPosition: Position;
    snakeHeadPosition: Position;
    direction: Dir;
}

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
});

export const willSnakeHitTheFood = ({
                                        foodPosition,
                                        snakeHeadPosition,
                                        direction,
                                    }: WillSnakeHitTheFood) => {
    switch (direction) {
        case DIRECTIONS.UP:
            return (
                foodPosition.x === snakeHeadPosition.x &&
                snakeHeadPosition.y - 5 === foodPosition.y
            );
        case DIRECTIONS.DOWN:
            return (
                foodPosition.x === snakeHeadPosition.x &&
                snakeHeadPosition.y + 5 === foodPosition.y
            );
        case DIRECTIONS.LEFT:
            return (
                foodPosition.y === snakeHeadPosition.y &&
                snakeHeadPosition.x - 5 === foodPosition.x
            );

        case DIRECTIONS.RIGHT:
            return (
                foodPosition.y === snakeHeadPosition.y &&
                snakeHeadPosition.x + 5 === foodPosition.x
            );
    }
};

export const hasSnakeEatenItself = (snakeBody: Position[]) => {
    if (snakeBody.length <= 1) {
        return false;
    }

    const head = snakeBody[snakeBody.length - 1];
    const body = snakeBody.slice(0, snakeBody.length - 1);

    return body.some((segment) => segment.x === head.x && segment.y === head.y);
};