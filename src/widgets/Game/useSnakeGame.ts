import {useState, KeyboardEvent} from "react";
import {useInterval} from "./interval.ts";
import {createSnakeMove} from "./move.ts";

export interface Position {
    x: number;
    y: number;
}

export const DIRECTIONS = {
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
} as const;

type Dir = keyof typeof DIRECTIONS;

const MOVE_SPEED = 200;

export const useSnakeGame = () => {
    const [dir, setDir] = useState<Dir>();
    const [snakeBody, setSnakeBody] = useState<Position[]>([
        {
            x: 0,
            y: 0
        }
    ]);

    const {moveUp, moveLeft, moveRight, moveDown} = createSnakeMove();

    const onSnakeMove = (e: KeyboardEvent) => {
        switch (e.code) {
            case 'KeyW':
                return setDir(DIRECTIONS.UP);
            case 'KeyA':
                return setDir(DIRECTIONS.LEFT);
            case 'KeyS':
                return setDir(DIRECTIONS.DOWN);
            case 'KeyD':
                return setDir(DIRECTIONS.RIGHT);
            case 'ArrowUp':
                return setDir(DIRECTIONS.UP);
            case 'ArrowDown':
                return setDir(DIRECTIONS.DOWN);
            case 'ArrowLeft':
                return setDir(DIRECTIONS.LEFT);
            case 'ArrowRight':
                return setDir(DIRECTIONS.RIGHT);
        }
    }

    const moveSnake = () => {
        let snakeAfterMove: Position[] | undefined;

        switch (dir) {
            case DIRECTIONS.UP:
                snakeAfterMove = moveUp(snakeBody);
                break;
            case DIRECTIONS.DOWN:
                snakeAfterMove = moveDown(snakeBody);
                break;
            case DIRECTIONS.LEFT:
                snakeAfterMove = moveLeft(snakeBody);
                break;
            case DIRECTIONS.RIGHT:
                snakeAfterMove = moveRight(snakeBody);
                break;
        }

        if (snakeAfterMove) {
            return setSnakeBody(snakeAfterMove);
        }
    }


    useInterval(moveSnake, MOVE_SPEED);

    return {
        snakeBody,
        onSnakeMove
    }
}