import type {DetailedHTMLProps, HTMLAttributes, RefObject} from "react";

import s from './Canvas.module.scss';
import {forwardRef, useEffect} from "react";

interface CanvasProps extends DetailedHTMLProps<HTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement> {
    draw: (ctx: CanvasRenderingContext2D) => void;
}

export const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>(({draw, ...props}, ref) => {

    useEffect(() => {
        const canvas = (ref as RefObject<HTMLCanvasElement>)?.current;
        const ctx = canvas?.getContext('2d');

        if (!ref || !canvas || !ctx) return;

        draw(ctx);
    }, [draw, ref])

    if (!ref) return null;

    return <canvas ref={ref} className={s.root} width={400} height={200} {...props}/>
});