interface RandomPositionOnGridArgs {
    gridSize?: number;
    threshold: number;
}

export const randomPositionOnGrid = ({
                                         gridSize = 5,
                                         threshold,
                                     }: RandomPositionOnGridArgs) =>
    Math.floor(Math.random() * (threshold / gridSize)) * gridSize;
