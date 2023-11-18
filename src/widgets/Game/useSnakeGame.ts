import {useState} from "react";

export interface Position {
    x: number;
    y: number;
}

export const useSnakeGame = () => {
    const [snakeBody, setSnakeBody] = useState<Position[]>([
        {
            x: 0,
            y: 0
        }
    ]);

    return {
        snakeBody
    }
}