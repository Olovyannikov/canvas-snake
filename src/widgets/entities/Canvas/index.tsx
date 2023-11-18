import type {DetailedHTMLProps, HTMLAttributes} from "react";

import s from './Canvas.module.scss';

interface CanvasProps extends DetailedHTMLProps<HTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {
    draw: (ctx: CanvasRenderingContext2D) => void;
}

export const Canvas = ({draw, ...props}: CanvasProps) => {
    return <canvas className={s.root} {...props}/>
}